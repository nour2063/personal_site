import React, { useEffect, useRef } from 'react';

const TO_RAD = Math.PI / 180;
const HALF_PI = Math.PI / 2;
const TAU = Math.PI * 2;

const PipeAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const resizeTimeout = useRef<number>();

    // Configuration constants
    const pipeCount = 20;
    const pipePropCount = 8;
    const pipePropsLength = pipeCount * pipePropCount;
    const turnCount = 8;
    const turnAmount = (360 / turnCount) * TO_RAD;
    const turnChanceRange = 500;
    const baseSpeed = 0.5;
    const rangeSpeed = 1;
    const baseTTL = 500;
    const rangeTTL = 800;
    const baseWidth = 2;
    const rangeWidth = 4;
    const baseHue = 180;
    const rangeHue = 60;

    const gradientStops = [
        { position: -0.1, color: 'rgb(0, 0, 0)' },
        { position: 0.5, color: 'rgb(30,60,69)' },
        { position: 1.5, color: 'rgb(0, 0, 0)' }
    ];

    // State refs
    const ctxRef = useRef<CanvasRenderingContext2D>();
    const bufferRef = useRef<HTMLCanvasElement>();
    const bufferCtxRef = useRef<CanvasRenderingContext2D>();
    const pipePropsRef = useRef(new Float32Array(pipePropsLength));
    const centerRef = useRef({ x: 0, y: 0 });
    const tickRef = useRef(0);

    const rand = (n: number) => Math.random() * n;
    const fadeInOut = (life: number, ttl: number) => 0.5 - Math.cos((life / ttl) * Math.PI) / 2;

    const initPipe = (i: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        pipePropsRef.current[i] = rand(canvas.width);
        pipePropsRef.current[i + 1] = centerRef.current.y;
        pipePropsRef.current[i + 2] = Math.round(rand(1)) ? HALF_PI : TAU - HALF_PI;
        pipePropsRef.current[i + 3] = baseSpeed + rand(rangeSpeed);
        pipePropsRef.current[i + 4] = 0; // life
        pipePropsRef.current[i + 5] = baseTTL + rand(rangeTTL); // ttl
        pipePropsRef.current[i + 6] = baseWidth + rand(rangeWidth);
        pipePropsRef.current[i + 7] = baseHue + rand(rangeHue);
    };

    const initPipes = () => {
        for (let i = 0; i < pipePropsLength; i += pipePropCount) {
            initPipe(i);
        }
    };

    const drawPipe = (x: number, y: number, life: number, ttl: number, width: number, hue: number) => {
        if (!bufferCtxRef.current) return;

        bufferCtxRef.current.save();
        bufferCtxRef.current.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.125})`;
        bufferCtxRef.current.beginPath();
        bufferCtxRef.current.arc(x, y, width, 0, TAU);
        bufferCtxRef.current.stroke();
        bufferCtxRef.current.restore();
    };

    const updatePipes = () => {
        tickRef.current++;
        const props = pipePropsRef.current;

        for (let i = 0; i < pipePropsLength; i += pipePropCount) {
            let x = props[i];
            let y = props[i + 1];
            let dir = props[i + 2];
            const speed = props[i + 3];
            let life = props[i + 4];
            const ttl = props[i + 5];
            const width = props[i + 6];
            const hue = props[i + 7];

            drawPipe(x, y, life, ttl, width, hue);

            // Update positions
            life++;
            x += Math.cos(dir) * speed;
            y += Math.sin(dir) * speed;

            // Boundary check
            if (x < 0) x = canvasRef.current!.width;
            if (x > canvasRef.current!.width) x = 0;
            if (y < 0) y = canvasRef.current!.height;
            if (y > canvasRef.current!.height) y = 0;

            // Update direction
            if ((tickRef.current % Math.round(rand(turnChanceRange))) === 0) {
                const turnBias = Math.round(rand(1)) ? -1 : 1;
                dir += turnAmount * turnBias;
            }

            // Update array
            props[i] = x;
            props[i + 1] = y;
            props[i + 2] = dir;
            props[i + 4] = life;

            if (life > ttl) initPipe(i);
        }
    };

    const render = () => {
        if (!ctxRef.current || !bufferRef.current || !canvasRef.current) return;

        const ctx = ctxRef.current;
        const canvas = canvasRef.current;

        // Create gradient background
        const gradient = ctx.createLinearGradient(
            0,
            canvas.height * gradientStops[0].position,
            0,
            canvas.height * gradientStops[2].position
        );

        gradientStops.forEach(stop => {
            gradient.addColorStop(
                (stop.position - gradientStops[0].position) /
                (gradientStops[2].position - gradientStops[0].position),
                stop.color
            );
        });

        // Draw background
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Composite pipes with blur effect
        ctx.save();
        ctx.filter = 'blur(12px)';
        ctx.globalCompositeOperation = 'lighten';
        ctx.drawImage(bufferRef.current, 0, 0);
        ctx.restore();

        // Draw crisp pipes on top
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.drawImage(bufferRef.current, 0, 0);
        ctx.restore();
    };

    const animate = () => {
        if (!canvasRef.current) return;

        updatePipes();
        render();
        animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        if (!canvasRef.current || !bufferRef.current || !ctxRef.current || !bufferCtxRef.current) return;

        // Throttle resize events
        clearTimeout(resizeTimeout.current);
        resizeTimeout.current = window.setTimeout(() => {
            const { innerWidth, innerHeight } = window;

            canvasRef.current!.width = innerWidth;
            canvasRef.current!.height = innerHeight;
            bufferRef.current!.width = innerWidth;
            bufferRef.current!.height = innerHeight;

            centerRef.current.x = innerWidth / 2;
            centerRef.current.y = innerHeight / 2;

            // Re-initialize pipes after resize
            initPipes();
        }, 100);
    };

    useEffect(() => {
        // Initialize canvases
        const canvas = canvasRef.current!;
        const buffer = document.createElement('canvas');

        ctxRef.current = canvas.getContext('2d')!;
        bufferCtxRef.current = buffer.getContext('2d')!;
        bufferRef.current = buffer;

        // Initial setup
        handleResize();
        initPipes();
        animate();

        // Event listeners
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationRef.current!);
            clearTimeout(resizeTimeout.current);
        };
    });

    return (
        <>
            <canvas ref={canvasRef} style={{
                zIndex: '-1',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }}/>
            <div className={"vignette"} />
        </>
    );
};

export default PipeAnimation;
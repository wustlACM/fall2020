import React, { useEffect, useState, createRef } from "react";
import { Container, Button, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import "src/css/App.css";
declare const window: any;

function LifeSimulation({ style }: { style?: React.CSSProperties }) {
  const canvasStyle: React.CSSProperties = {
    height: "100vh",
    width: "100%",
  };

  if (style) {
    Object.assign(canvasStyle, style);
  }

  const theme = useTheme();
  const canvasElementRef = createRef<HTMLCanvasElement>();
  let canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D | null,
    dpi: number;
  const particle_count = 70;
  const particles: any[] = [];
  const couleurs = ["#3a0088", "#930077", "#e61c5d", "#ffbd39"];

  const initSimulation = () => {
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback: () => void) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    try {
      canvas = canvasElementRef.current as HTMLCanvasElement;
      context = canvas.getContext("2d");
    } catch (err) {
      console.error(err);
      return;
    }

    //get DPI
    dpi = window.devicePixelRatio || 1;
    if (context) context.scale(dpi, dpi);
    console.log(dpi);
  };

  const fix_dpi = () => {
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);
    let style_width = +getComputedStyle(canvas)
      .getPropertyValue("width")
      .slice(0, -2);

    //scale the canvas
    canvas.setAttribute("height", `${style_height * dpi}`);
    canvas.setAttribute("width", `${style_width * dpi}`);
  };

  class Particle {
    radius: number;
    x: number;
    y: number;
    color: string;
    speedx: number;
    speedy: number;
    constructor() {
      this.radius = Math.round(Math.random() * 2 + 2);
      this.x = Math.floor(
        Math.random() *
          (+getComputedStyle(canvas).getPropertyValue("width").slice(0, -2) *
            dpi -
            this.radius +
            1) +
          this.radius
      );
      this.y = Math.floor(
        Math.random() *
          (+getComputedStyle(canvas).getPropertyValue("height").slice(0, -2) *
            dpi -
            this.radius +
            1) +
          this.radius
      );
      this.color = couleurs[Math.floor(Math.random() * couleurs.length)];
      this.speedx = Math.round(Math.random() * 201 + 0) / 100;
      this.speedy = Math.round(Math.random() * 201 + 0) / 100;

      switch (Math.round(Math.random() * couleurs.length)) {
        case 1:
          this.speedx *= 1;
          this.speedy *= 1;
          break;
        case 2:
          this.speedx *= -1;
          this.speedy *= 1;
          break;
        case 3:
          this.speedx *= 1;
          this.speedy *= -1;
          break;
        case 4:
          this.speedx *= -1;
          this.speedy *= -1;
          break;
      }
    }

    move() {
      if (!context) return;

      this.x = this.x + this.speedx;
      this.y = this.y + this.speedy;

      if (this.x <= 0 + this.radius) {
        this.speedx *= -1;
      }
      if (this.x >= canvas.width - this.radius) {
        this.speedx *= -1;
      }
      if (this.y <= 0 + this.radius) {
        this.speedy *= -1;
      }
      if (this.y >= canvas.height - this.radius) {
        this.speedy *= -1;
      }

      context.beginPath();
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      context.fillStyle = this.color;
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
      context.closePath();

      for (var j = 0; j < particle_count; j++) {
        var particleActuelle = particles[j],
          yd = particleActuelle.y - this.y,
          xd = particleActuelle.x - this.x,
          d = Math.sqrt(xd * xd + yd * yd);

        if (d < 100) {
          context.beginPath();
          context.globalAlpha = (100 - d) / (100 - 0);
          context.globalCompositeOperation = "destination-over";
          context.lineWidth = 1;
          context.moveTo(this.x, this.y);
          context.lineTo(particleActuelle.x, particleActuelle.y);
          context.strokeStyle = this.color;
          context.lineCap = "round";
          context.stroke();
          context.closePath();
        }
      }
    }
  }

  const animate = () => {
    if (!context) return;
    fix_dpi();
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particle_count; i++) {
      particles[i].move();
    }
    window.requestAnimFrame(animate);
  };

  useEffect(() => {
    initSimulation();
    if (context) {
      for (let i = 0; i < particle_count; i++) {
        fix_dpi();
        const particle: any = new Particle();
        particles.push(particle);
      }
      animate();
    }
  }, []);

  return (
    <canvas
      ref={canvasElementRef}
      className="life-simulation"
      style={canvasStyle}
    />
  );
}

export default LifeSimulation;

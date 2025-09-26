<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";

export default {
  name: "ParticlesBackground",
  setup() {
    const canvas = ref(null);
    let ctx, particles = [];
    let animationFrame;
    let mouse = { x: null, y: null, radius: 100 };

    // ایجاد ذرات
    const initParticles = () => {
      const width = (canvas.value.width = window.innerWidth);
      const height = (canvas.value.height = window.innerHeight);
      particles = [];
      const numberOfParticles = Math.floor((width * height) / 9000);

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          dx: (Math.random() - 0.5) * 1.2,
          dy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 3 + 1,
        });
      }
    };

    // کشیدن ذرات
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

      // رسم دایره‌ها
      particles.forEach((p) => {
        // دفع از موس
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          let angle = Math.atan2(dy, dx);
          let force = (mouse.radius - distance) / mouse.radius;
          let forceX = Math.cos(angle) * force * 5;
          let forceY = Math.sin(angle) * force * 5;

          p.x -= forceX;
          p.y -= forceY;
        }

        // حرکت طبیعی
        p.x += p.dx;
        p.y += p.dy;

        // برخورد با دیواره‌ها
        if (p.x < 0 || p.x > canvas.value.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.value.height) p.dy *= -1;

        // رسم دایره
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();
        ctx.closePath();
      });

      // رسم خطوط اتصال
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255,255,255,0.2)";
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      animationFrame = requestAnimationFrame(drawParticles);
    };

    // رویدادها
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      initParticles();
    };

    onMounted(() => {
      ctx = canvas.value.getContext("2d");
      initParticles();
      drawParticles();

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    });

    return { canvas };
  },
};
</script>

<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>

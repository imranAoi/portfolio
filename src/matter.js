// matter.js

import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';
import MatterWrap from 'matter-wrap';

// Use the plugins
Matter.use(MatterAttractors);
Matter.use(MatterWrap);

function runMatter(canvas) {
  var Engine = Matter.Engine,
    Events = Matter.Events,
    Runner = Matter.Runner,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    Common = Matter.Common,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Bodies = Matter.Bodies;

  var engine = Engine.create();

  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  var render = Render.create({
    canvas: canvas,
    engine: engine,
    
    options: {
      showVelocity: false,
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: "transparent",
    },
    bounds: {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight },
    },
  });

  // ✅ FIX: Force canvas to match screen dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render.canvas.style.width = "100%";
  render.canvas.style.height = "100%";
  

  var runner = Runner.create();
  var world = engine.world;
  world.gravity.scale = 0;

  var attractiveBody = Bodies.circle(
    render.options.width / 2,
    render.options.height / 2,
    Math.max(window.innerWidth / 25, window.innerHeight / 25) / 2,
    {
      render: {
        fillStyle: `#000`,
        strokeStyle: `#000`,
        lineWidth: 0,
      },
      isStatic: true,
      plugin: {
        attractors: [
          function (bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            };
          },
        ],
      },
    }
  );

  World.add(world, attractiveBody);

  for (var i = 0; i < 60; i += 1) {
    let x = Common.random(0, render.options.width);
    let y = Common.random(0, render.options.height);
    let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
    let poligonNumber = Common.random(3, 6);
    var body = Bodies.polygon(x, y, poligonNumber, s, {
      mass: s / 20,
      friction: 0,
      frictionAir: 0.02,
      angle: Math.round(Math.random() * 360),
      render: {
        fillStyle: "#222222",
        strokeStyle: `#000000`,
        lineWidth: 2,
      },
    });

    World.add(world, body);

    let r = Common.random(0, 1);

    var circle1 = Bodies.circle(x, y, Common.random(2, 8), {
      mass: 0.1,
      friction: 0,
      frictionAir: 0.01,
      render: {
        fillStyle: r > 0.3 ? `#27292d` : `#444444`,
        strokeStyle: `#000000`,
        lineWidth: 2,
      },
    });
    World.add(world, circle1);

    var circle2 = Bodies.circle(x, y, Common.random(2, 20), {
      mass: 6,
      friction: 0,
      frictionAir: 0,
      render: {
        fillStyle: r > 0.3 ? `#334443` : `#222222`,
        strokeStyle: `#111111`,
        lineWidth: 4,
      },
    });
    World.add(world, circle2);

    var circle3 = Bodies.circle(x, y, Common.random(2, 30), {
      mass: 0.2,
      friction: 0.6,
      frictionAir: 0.8,
      render: {
        fillStyle: `#191919`,
        strokeStyle: `#111111`,
        lineWidth: 3,
      },
    });
    World.add(world, circle3);
  }

  var mouse = Mouse.create(render.canvas);

  Events.on(engine, "afterUpdate", function () {
    if (!mouse.position.x) return;
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12,
    });
  });

  let data = {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
    play: function () {
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
    },
  };

  Matter.Runner.run(runner, engine);
  Matter.Render.run(render);
  return data;
}

export { runMatter };

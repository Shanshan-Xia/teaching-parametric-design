const jscad = require('@jscad/modeling');

const {circle, cylinder} = jscad.primitives;

const{
  extrudeRectangular,
  extrudeLinear,
  extrudeRotate
} = jscad.extrusions;

const{
  colorize,
  colorNameToRgb
} = jscad.colors;

const {
  union, 
  subtract, 
  intersect, 
  scission
} = jscad.booleans;

const main = () => {
  const circleShape = circle({
    radius: 5,
    segments: 6,
    center: [0, 2, 6]
});

const extrudeShape = extrudeLinear({
  height: 30,
  twistAngle: Math.PI * 4,
  twistSteps: 100
}, circleShape);

const colorObject = colorize(
  [0,180,200],
  extrudeShape
);

const cylinderShape = cylinder({
  center: [0, 2, 6],
  height: 50,
  radius: 2,
  segments: 50
});

const unionShape = subtract([extrudeShape,cylinderShape]);

return extrudeShape;
return cylinderShape;
return colorObject;
return unionShape;
};

module.exports = { main };
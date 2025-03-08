interface ColorSwatchProps {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
}

const ColorSwatch = ({ name, hex, rgb, hsl }: ColorSwatchProps) => (
  <div className="color-swatch">
    <div className="color-swatch__preview" style={{ backgroundColor: hex }} />
    <div className="color-swatch__info">
      <h3 className="color-swatch__name">{name}</h3>
      <dl className="color-swatch__values">
        <div className="color-swatch__value">
          <dt>HEX</dt>
          <dd>{hex}</dd>
        </div>
        <div className="color-swatch__value">
          <dt>RGB</dt>
          <dd>{rgb}</dd>
        </div>
        <div className="color-swatch__value">
          <dt>HSL</dt>
          <dd>{hsl}</dd>
        </div>
      </dl>
    </div>
  </div>
);

interface ColorPaletteGroupProps {
  title: string;
  colors: Array<{
    name: string;
    hex: string;
    rgb: string;
    hsl: string;
  }>;
}

const ColorPaletteGroup = ({ title, colors }: ColorPaletteGroupProps) => (
  <div className="color-palette__group">
    <h3 className="color-palette__subtitle">{title}</h3>
    <div className="color-palette__grid">
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </div>
  </div>
);

const ColorPalette = () => {
  const roseColors = [
    {
      name: 'Rose-900',
      hex: '#260F08',
      rgb: '38, 15, 8',
      hsl: '14°, 65%, 9%'
    },
    {
      name: 'Rose-500',
      hex: '#87635A',
      rgb: '135, 99, 90',
      hsl: '12°, 20%, 44%'
    },
    {
      name: 'Rose-400',
      hex: '#AD8A85',
      rgb: '173, 138, 133',
      hsl: '7°, 20%, 60%'
    },
    {
      name: 'Rose-300',
      hex: '#CAAFA7',
      rgb: '202, 175, 167',
      hsl: '14°, 25%, 72%'
    },
    {
      name: 'Rose-100',
      hex: '#F5EEEC',
      rgb: '245, 238, 236',
      hsl: '13°, 31%, 94%'
    },
    {
      name: 'Rose-50',
      hex: '#FCF8F6',
      rgb: '252, 248, 246',
      hsl: '20°, 50%, 98%'
    }
  ];

  const redColors = [
    {
      name: 'Red-500',
      hex: '#C73B0F',
      rgb: '199, 59, 15',
      hsl: '14°, 86%, 42%'
    }
  ];

  const greenColors = [
    {
      name: 'Green-500',
      hex: '#1EA575',
      rgb: '30, 165, 117',
      hsl: '159°, 69%, 38%'
    }
  ];

  const monochromeColors = [
    {
      name: 'Black',
      hex: '#000000',
      rgb: '0, 0, 0',
      hsl: '0°, 0%, 0%'
    },
    {
      name: 'White',
      hex: '#FFFFFF',
      rgb: '255, 255, 255',
      hsl: '0°, 0%, 100%'
    }
  ];

  return (
    <div className="color-palette">
      <h2 className="color-palette__title">Color System</h2>
      <div className="color-palette__content">
        <ColorPaletteGroup title="Rose Palette" colors={roseColors} />
        <ColorPaletteGroup title="Red Palette" colors={redColors} />
        <ColorPaletteGroup title="Green Palette" colors={greenColors} />
        <ColorPaletteGroup title="Monochrome" colors={monochromeColors} />
      </div>
    </div>
  );
};

export default ColorPalette; 
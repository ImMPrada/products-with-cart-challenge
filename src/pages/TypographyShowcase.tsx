import React from 'react';
import {
  TextPreset1,
  TextPreset2,
  TextPreset3,
  TextPreset4,
  TextPreset4Bold,
} from '../components/Typography';
import '../styles/design-system/_fonts.scss';

const TypographyShowcase: React.FC = () => {
  return (
    <div className="typography-showcase" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <TextPreset1 className="showcase-title" style={{ marginBottom: '2rem' }}>
        Typography System
      </TextPreset1>

      <section style={{ marginBottom: '3rem' }}>
        <TextPreset2 style={{ marginBottom: '1.5rem' }}>Text Preset 1 - Headers</TextPreset2>
        <TextPreset1>
          Red Hat Text Bold - 40px
        </TextPreset1>
        <div style={{ color: '#666', marginTop: '0.5rem' }}>
          <TextPreset4>Line Height: 120% | Letter Spacing: 0px</TextPreset4>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <TextPreset2 style={{ marginBottom: '1.5rem' }}>Text Preset 2 - Subheaders</TextPreset2>
        <TextPreset2>
          Red Hat Text Bold - 24px
        </TextPreset2>
        <div style={{ color: '#666', marginTop: '0.5rem' }}>
          <TextPreset4>Line Height: 125% | Letter Spacing: 0px</TextPreset4>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <TextPreset2 style={{ marginBottom: '1.5rem' }}>Text Preset 3 - Emphasis</TextPreset2>
        <TextPreset3>
          Red Hat Text Semi Bold - 16px
        </TextPreset3>
        <div style={{ color: '#666', marginTop: '0.5rem' }}>
          <TextPreset4>Line Height: 150% | Letter Spacing: 0px</TextPreset4>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <TextPreset2 style={{ marginBottom: '1.5rem' }}>Text Preset 4 - Body</TextPreset2>
        <TextPreset4>
          Red Hat Text Regular - 14px
        </TextPreset4>
        <div style={{ color: '#666', marginTop: '0.5rem' }}>
          <TextPreset4>Line Height: 150% | Letter Spacing: 0px</TextPreset4>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <TextPreset2 style={{ marginBottom: '1.5rem' }}>Text Preset 4 Bold - Strong Body</TextPreset2>
        <TextPreset4Bold>
          Red Hat Text Semi Bold - 14px
        </TextPreset4Bold>
        <div style={{ color: '#666', marginTop: '0.5rem' }}>
          <TextPreset4>Line Height: 150% | Letter Spacing: 0px</TextPreset4>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <TextPreset2 style={{ marginBottom: '1.5rem' }}>Example Text</TextPreset2>
        <TextPreset1 style={{ marginBottom: '1rem' }}>
          Main Header Example
        </TextPreset1>
        <TextPreset2 style={{ marginBottom: '1rem' }}>
          Section Title Example
        </TextPreset2>
        <TextPreset3 style={{ marginBottom: '1rem' }}>
          This is an example of emphasized text that might introduce a section or highlight important information.
        </TextPreset3>
        <TextPreset4 style={{ marginBottom: '1rem' }}>
          This is an example of body text. It uses the regular weight of Red Hat Text and is perfect for longer passages of content. The line height of 150% ensures good readability and comfortable reading experience.
        </TextPreset4>
        <TextPreset4Bold>
          This is an example of bold body text, which can be used to emphasize important points within regular body text or for interactive elements.
        </TextPreset4Bold>
      </section>
    </div>
  );
};

export default TypographyShowcase; 
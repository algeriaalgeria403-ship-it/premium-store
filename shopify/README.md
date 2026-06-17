# Premium Digital Products Shopify Theme

A professional, conversion-optimized Shopify theme for selling digital products with premium visual effects and animations.

## Features

### Design Elements
- ✨ Aurora background effects with animated gradients
- 🎨 Glassmorphism design with blur effects
- 💫 Floating particles and glow effects
- 🎯 Responsive grid layouts
- 📱 Mobile-optimized experience
- 🎬 Smooth animations and transitions

### Sections
1. **Header** - Sticky navigation with cart integration
2. **Hero** - Eye-catching banner with CTAs
3. **Featured Products** - Product showcase grid
4. **Pricing** - Multiple pricing tiers with badges
5. **Testimonials** - Customer reviews carousel
6. **Footer** - Information and social links
7. **Floating Assistant** - Support widget
8. **Scroll Progress** - Visual scroll indicator
9. **Back to Top** - Quick navigation button

## Installation

### 1. Upload Theme to Shopify

```bash
shopify theme push
```

### 2. Configure Theme Settings

- Go to Shopify Admin > Online Store > Themes
- Select the theme
- Click "Customize"
- Configure colors, fonts, and social links

### 3. Add Content

- Create products in your Shopify store
- Add testimonials through theme sections
- Customize pricing tiers
- Update contact information

## Usage

### Adding Sections

Each section is independent and can be added to any page:

```liquid
{% section 'hero' %}
{% section 'featured-products' %}
{% section 'pricing' %}
{% section 'testimonials' %}
```

### Customizing Colors

Colors can be customized through theme settings:

- Primary Color: #00d4ff
- Secondary Color: #0099ff
- Accent Color: #ff006e
- Background: #0f172a

### Adding Products

1. Go to Products in Shopify Admin
2. Create new products
3. Add images, pricing, and descriptions
4. Enable in featured sections through theme customizer

## File Structure

```
shopify/
├── sections/
│   ├── header.liquid
│   ├── hero.liquid
│   ├── featured-products.liquid
│   ├── pricing.liquid
│   ├── testimonials.liquid
│   ├── footer.liquid
│   ├── floating-assistant.liquid
│   ├── back-to-top.liquid
│   └── scroll-progress.liquid
├── assets/
│   └── theme.js
├── config/
│   └── settings_schema.json
├── theme.liquid (main template)
└── README.md
```

## Customization

### Modifying Colors

Edit the CSS variables in each section's stylesheet:

```css
--primary: #00d4ff;
--secondary: #0099ff;
--accent: #ff006e;
--dark: #0f172a;
```

### Adding Custom JavaScript

Add custom code to `assets/theme.js`:

```javascript
// Your custom JavaScript here
```

### Modifying Sections

Each `.liquid` file can be edited to customize layout, styling, and functionality.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized animations using CSS transforms
- Lazy loading for images
- Minified assets
- Fast load times

## Support

For issues or questions:
- Email: support@premiumhub.com
- WhatsApp: +213 123 456 789

## License

Proprietary - All rights reserved

---

**Made with ✨ for premium digital products**
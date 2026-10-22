# FormLab

A Japanese-inspired streetwear storefront built with Next.js, React, TypeScript, and Tailwind CSS. It includes a filterable catalog, product galleries, variant selection, a shared cart, and a multi-step checkout using React Hook Form and Zod.

This is a portfolio demo with mock product data and illustrative delivery/payment options. It does not place real orders or collect payments. Promo codes and customization are reserved for a future version.

## Development

Use Node.js 22 (Next.js requires at least 20.9) and pnpm 10.32.1.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. No application environment variables are currently required. Production builds fetch Manrope and Instrument Serif through `next/font/google`, so they need access to Google Fonts.

```bash
pnpm lint
pnpm build
pnpm start
```

## Code organization

- `src/app/`: routes and components specific to each page. Checkout configuration, schema, and form hook stay together here.
- `src/components/layout/`: header, catalog, hero, and footer. Each header dropdown has its own component.
- `src/components/ui/`: reusable controls, dialogs, and storefront links.
- `src/data/`: mock catalog records and product-detail data construction.
- `src/types/`: shared product, cart, and navigation contracts. Product types do not depend on mock data.
- `src/lib/`: reusable pure functions, including cart calculations, currency formatting, and class-name utilities.
- `src/providers/`: shared React state and its public hooks.

Keep small component props, UI constants, and event handlers beside their component. Extract shared domain contracts, repeated calculations, or substantial orchestration when that makes the code easier to follow. Form types are inferred from the Zod schema rather than maintained separately. Import modules directly; there is no global barrel file or generic service layer.

The cart currently lasts for the mounted session, and refreshing checkout resets its form. The existing catalog/product pricing and shipping-total integration still need alignment before the complete shopping journey is portfolio-ready.

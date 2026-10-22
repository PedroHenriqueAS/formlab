const socialNetworks = [
  {
    name: "Instagram",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <path
        d="M14 22v-9h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.4c-.7-.1-1.8-.4-3-.4-3 0-5 1.8-5 5.2V9H7v4h3v9Z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
  {
    name: "X",
    icon: (
      <path
        d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.9-9L.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
  {
    name: "YouTube",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export function SocialButtons() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 xl:gap-6">
      {socialNetworks.map(({ name, icon }) => (
        <button
          key={name}
          type="button"
          aria-label={`${name} (profile coming soon)`}
          title={name}
          className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 motion-reduce:transition-none"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            {icon}
          </svg>
        </button>
      ))}
    </div>
  );
}

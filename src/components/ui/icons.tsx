import type { ReactNode, SVGProps } from "react";

// Íconos SVG inline: heredan el color del texto (currentColor) y no dependen de CDNs.
// Los de marca (GitHub, LinkedIn) salen de devicon (MIT).

type IconProps = SVGProps<SVGSVGElement>;

const StrokeIcon = ({ children, ...props }: IconProps & { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    {children}
  </svg>
);

const BrandIcon = ({ children, ...props }: IconProps & { children: ReactNode }) => (
  <svg
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    {children}
  </svg>
);

export const GitHubIcon = (props: IconProps) => (
  <BrandIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
    />
  </BrandIcon>
);

export const LinkedInIcon = (props: IconProps) => (
  <BrandIcon {...props}>
    <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z" />
  </BrandIcon>
);

export const MailIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </StrokeIcon>
);

export const CopyIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5" />
  </StrokeIcon>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M14 4h6v6" />
    <path d="M20 4 10.5 13.5" />
    <path d="M19 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 4 18.5v-12A1.5 1.5 0 0 1 5.5 5H10" />
  </StrokeIcon>
);

export const DownloadIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M12 4v11" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 20h14" />
  </StrokeIcon>
);

export const LayersIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="m12 3 9 5-9 5-9-5 9-5z" />
    <path d="m3 12.5 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </StrokeIcon>
);

export const BriefcaseIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    <path d="M3 13h18" />
  </StrokeIcon>
);

export const GraduationCapIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="m2 9 10-5 10 5-10 5-10-5z" />
    <path d="M6 11v5c0 1.4 2.7 3 6 3s6-1.6 6-3v-5" />
    <path d="M22 9v6" />
  </StrokeIcon>
);

export const ArrowRightIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </StrokeIcon>
);

export const CloseIcon = (props: IconProps) => (
  <StrokeIcon {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </StrokeIcon>
);

interface MenuItem {
  url: string;
  title: string;
  name: string;
  fontAwesomeClass: string | null;
  teaserText: string | null;
}

interface MenuSection {
  title: string;
  menuItems: MenuItem[];
}

interface ButtonBlock {
  NDSButtonSize: string;
  NDSButtonVariant: string;
  NDSOnBg: string;
  Heading: string;
  IsSubHeading: boolean;
  SubHeading: string | null;
  CtaUrl: string;
  ButtonSize: string;
  ColourTheme: string;
  IsBadge: boolean;
  BadgeColour: string;
  BadgeTopText: string | null;
  BadgeMidText: string | null;
  BadgeBottomText: string | null;
  ButtonText: string;
}

interface TeaserImage {
  FACode: string | null;
  Heading: string;
  BackgroundTheme: string;
  TextColorTheme: string;
  BackgroundImage: string;
  CardSize: string;
  VerticalAlign: string;
  SectionTextAlign: string;
  SectionText: string;
  ButtonBlocks: ButtonBlock[];
}

interface NotificationMessage {
  title: string;
  theme: string;
  description: string;
  icon: string;
  showNotifications: boolean;
}

interface ApiResponse {
  mobileMenu: any[];
  desktopMenu: {
    products: {
      first: MenuSection;
      second: MenuSection;
    };
    article: MenuSection;
    category: MenuSection;
    teaserImages: {
      first: TeaserImage[];
      second: TeaserImage[];
    };
    helpLink: string;
    loginLink: string;
  };
  notificationsMessages: {
    loggedInNotificationMessage: NotificationMessage;
    notificationMessage: NotificationMessage;
  };
}

export type {
  MenuItem,
  MenuSection,
  ButtonBlock,
  TeaserImage,
  NotificationMessage,
  ApiResponse,
};

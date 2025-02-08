import { ReactNode } from "react"; // Импортируем тип для children

export const metadata = {
  title: "Верстка страницы",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <div>{children}</div>;
}

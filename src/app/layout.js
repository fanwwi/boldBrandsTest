import styles from "../styles/styles.css";

export const metadata = {
  title: "Верстка страницы",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

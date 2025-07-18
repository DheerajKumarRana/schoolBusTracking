import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'School Bus Tracker',
  description: 'Track your child\'s school bus in real-time.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

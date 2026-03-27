import { Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import Navbar from '@/components/navbar';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], 
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'HRD Shop',
  description: 'Premium Admin Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex font-sans">
        <SidebarProvider>
         
          <AppSidebar />

          <div className="flex-1 flex flex-col min-w-0">
  
            <header className="sticky top-0 z-50 flex items-center h-16 bg-white border-b border-gray-200 px-8 shrink-0">
              <div className="flex-1" />
              <Navbar />
            </header>

            <SidebarInset className="flex-1 bg-[#f8fafc] overflow-y-auto transition-all duration-300"> 
              
              <div className="px-10 pt-8 pb-4"> 
                <SidebarTrigger className="h-9 w-9 border border-gray-200 bg-white shadow-sm hover:bg-gray-50 rounded-xl transition-all active:scale-95" />
              </div>

              <main className="px-10 pb-10">
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import useUser from './hooks/useUser';
import Login from './pages/Login';
import { Toaster } from './components/ui/toaster';
import ProtectedRouter from './HOCs/ProtectedRouter';

const queryClient = new QueryClient();

const App = () => {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
              <Route
                element={
                  <ProtectedRouter
                    isAllowed={user?.status === 'logged'}
                    redirect="/login"
                  />
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsList />} />
                <Route path="/news/:id" element={<NewsDetail user={user} />} />
                <Route path="/profile" element={<Profile user={user} />} />
              </Route>
            </Route>
            <Route element={<ProtectedRouter isAllowed={user?.status !== 'logged'} />}>
              <Route path="/login" element={<Login signInHandler={signInHandler} />} />
              <Route path="/signup" element={<Signup signUpHandler={signUpHandler} />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

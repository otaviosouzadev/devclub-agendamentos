import { CalendarDays, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  const [dark, setDark] = useState(() => localStorage.getItem('agenda-theme') === 'dark');
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('agenda-theme', dark ? 'dark' : 'light'); }, [dark]);

  return <div className="app-shell">
    <header className="header"><div className="container header-inner">
      <NavLink to="/" className="brand"><span className="brand-icon"><CalendarDays size={21}/></span><span>AgendaPro</span></NavLink>
      <div className="header-actions"><nav className="nav"><NavLink to="/" end>Agendar</NavLink><NavLink to="/admin">Administração</NavLink></nav><button className="theme-button" onClick={()=>setDark(!dark)} aria-label="Alternar tema">{dark?<Sun size={18}/>:<Moon size={18}/>}</button></div>
    </div></header>
    <main><Outlet/></main>
    <footer className="footer"><strong>AgendaPro</strong><span>Desafio técnico DevClub • React + TypeScript</span></footer>
  </div>;
}

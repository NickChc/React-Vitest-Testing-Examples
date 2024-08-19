import "./header.css";

interface HeaderProps {
  isAuthorized: boolean;
}

export function Header({ isAuthorized }: HeaderProps) {
  return (
    <header>
      <nav>
        <a href="/">HOME</a>
      </nav>
      {isAuthorized && <button>Profile</button>}
    </header>
  );
}

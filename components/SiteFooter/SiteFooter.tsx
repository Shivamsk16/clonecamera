import styles from "./SiteFooter.module.scss";

const links = [
  {
    title: "Shop",
    items: ["Polaroid Lab", "Film", "Gift Cards"],
  },
  {
    title: "Support",
    items: ["Customer Service", "Warranty Policy", "Accessibility"],
  },
  {
    title: "Company",
    items: ["About Us", "Careers", "Contact"],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
  },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {links.map((col) => (
          <div key={col.title}>
            <p className={styles.colTitle}>{col.title}</p>
            <ul className={styles.list}>
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p className={styles.note}>Educational clone — reference live Polaroid I-2 campaign.</p>
        <p className={styles.note}>© {new Date().getFullYear()} Demo build.</p>
      </div>
    </footer>
  );
}

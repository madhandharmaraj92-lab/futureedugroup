import React from "react";
import { Link } from "./Link";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  title?: string;
  subtitle?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  title,
  subtitle,
}) => {
  const pagePath = items[items.length - 1]?.path ?? "";
  const pageVariant =
    pagePath.replace(/^\//, "").replaceAll("-", "_") || "home";

  return (
    <section
      className={`main-banner inner-page-banner inner-page-${pageVariant}`}
      style={{
        padding: "150px 0 64px 0",
        background: "#f3f4f6",
        position: "relative",
        overflow: "hidden",
        color: "#06264a",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-10">
            {subtitle && (
              <span
                style={{
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#0e87c9",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                {subtitle}
              </span>
            )}
            {title && (
              <h1
                style={{
                  fontSize: "clamp(30px, 4vw, 46px)",
                  fontWeight: 800,
                  color: "#06264a",
                  marginBottom: "18px",
                  lineHeight: 1.15,
                  maxWidth: "720px",
                }}
              >
                {title}
              </h1>
            )}

            {/* Breadcrumb Navigation Trail */}
            <nav aria-label="breadcrumb">
              <ol
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  listStyle: "none",
                  padding: "8px 20px",
                  background: "#ffffff",
                  border: "1px solid #dbeafe",
                  backdropFilter: "blur(8px)",
                  borderRadius: "30px",
                  margin: 0,
                  fontSize: "14px",
                }}
              >
                <li>
                  <Link
                    to="/"
                    style={{
                      color: "#06264a",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Home
                  </Link>
                </li>
                {items.map((item, index) => {
                  const isLast = index === items.length - 1;
                  return (
                    <React.Fragment key={item.path}>
                      <li style={{ color: "#0e87c9" }}>
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li aria-current={isLast ? "page" : undefined}>
                        {isLast ? (
                          <span style={{ color: "#0e87c9", fontWeight: 700 }}>
                            {item.name}
                          </span>
                        ) : (
                          <Link
                            to={item.path}
                            style={{
                              color: "#06264a",
                              textDecoration: "none",
                              fontWeight: 600,
                            }}
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    </React.Fragment>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

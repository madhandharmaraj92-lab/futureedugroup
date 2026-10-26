"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  blogApi,
  BlogApiError,
  type BlogDetail,
  type BlogListResponse,
  type BlogSummary,
} from "../lib/blogApi";

type BlogsPageProps = {
  initialSlug?: string;
  initialList?: BlogListResponse;
  initialPost?: BlogDetail;
};

export const BlogsPage: React.FC<BlogsPageProps> = ({
  initialSlug,
  initialList,
  initialPost,
}) => {
  const [items, setItems] = useState<BlogSummary[]>(initialList?.items ?? []);
  const [page, setPage] = useState(initialList?.page ?? 1);
  const [total, setTotal] = useState(initialList?.total ?? 0);
  const [selected, setSelected] = useState<BlogDetail | null>(initialPost ?? null);
  const [loading, setLoading] = useState(!initialList && !initialPost);
  const [error, setError] = useState("");
  const perPage = 9;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const loadList = useCallback(async (nextPage: number) => {
    setLoading(true);
    setError("");
    setSelected(null);
    try {
      const result = await blogApi.list(nextPage, perPage);
      setItems(result.items);
      setTotal(result.total);
      setPage(result.page);
    } catch (reason) {
      setError(
        reason instanceof BlogApiError
          ? reason.message
          : "Unable to load articles.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const loadPost = useCallback(async (slug: string, updateUrl = true) => {
    setLoading(true);
    setError("");
    try {
      setSelected(await blogApi.get(slug));
      if (updateUrl)
        window.history.pushState(
          { slug },
          "",
          `/blogs/${encodeURIComponent(slug)}`,
        );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (reason) {
      setError(
        reason instanceof BlogApiError
          ? reason.message
          : "Unable to load this article.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const openFromUrl = () => {
      const match = window.location.pathname.match(/^\/blogs\/([^/]+)\/?$/);
      const slug = match ? decodeURIComponent(match[1]) : initialSlug;
      if (slug) {
        if (initialPost?.slug !== slug) loadPost(slug, false);
      } else if (!initialList) {
        loadList(page);
      }
    };
    openFromUrl();
    window.addEventListener("popstate", openFromUrl);
    return () => window.removeEventListener("popstate", openFromUrl);
  }, [initialList, initialPost, initialSlug, loadList, loadPost, page]);

  if (selected)
    return (
      <main
        style={{
          paddingTop: "150px",
          minHeight: "75vh",
          background: "#fffdf9",
        }}
      >
        <article
          className="container"
          style={{ maxWidth: "900px", paddingBottom: "80px" }}
        >
          <button
            type="button"
            onClick={() => {
              window.history.pushState({}, "", "/blogs");
              loadList(page);
            }}
            style={backButton}
          >
            ← Back to all articles
          </button>
          {selected.thumbnail && (
            <img
              src={selected.thumbnail}
              alt={selected.title}
              style={{
                width: "100%",
                maxHeight: "470px",
                objectFit: "cover",
                borderRadius: "20px",
                marginBottom: "30px",
              }}
            />
          )}
          <div
            style={{ color: "#167f7b", fontWeight: 700, marginBottom: "10px" }}
          >
            {selected.category}
          </div>
          <h1
            style={{
              color: "#06264a",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            {selected.title}
          </h1>
          <div style={{ color: "#64748b", margin: "15px 0 30px" }}>
            By {selected.creator} ·{" "}
            {new Date(selected.created_at).toLocaleDateString()}
          </div>
          {selected.excerpt && (
            <p
              style={{
                fontSize: "1.15rem",
                color: "#475569",
                lineHeight: 1.8,
                fontWeight: 500,
              }}
            >
              {selected.excerpt}
            </p>
          )}
          <div style={{ marginTop: "32px" }}>
            {selected.content.map((block, index) => (
              <p
                key={index}
                style={{
                  color: "#334155",
                  fontSize: "1.02rem",
                  lineHeight: 1.9,
                  whiteSpace: "pre-wrap",
                }}
              >
                {block}
              </p>
            ))}
          </div>
        </article>
      </main>
    );

  return (
    <main
      style={{
        paddingTop: "145px",
        minHeight: "75vh",
        background: "#fffdf9",
        paddingBottom: "80px",
      }}
    >
      <div className="container">
        <div
          className="section-heading"
          style={{ textAlign: "center", marginBottom: "45px" }}
        >
          <h6>Insights &amp; Updates</h6>
          <h1 style={{ color: "#06264a", fontWeight: 800 }}>
            Latest from <em>Future Edu Group</em>
          </h1>
          <p>
            Education, careers, learning technology, and institutional insights.
          </p>
        </div>
        {error && (
          <div role="alert" style={errorBox}>
            {error}
          </div>
        )}
        {loading ? (
          <div
            style={{ textAlign: "center", padding: "70px", color: "#64748b" }}
          >
            Loading articles…
          </div>
        ) : items.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "70px", color: "#64748b" }}
          >
            No published articles are available yet.
          </div>
        ) : (
          <div className="row">
            {items.map((post) => (
              <div key={post.slug} className="col-lg-4 col-md-6 mb-4">
                <article style={card}>
                  <div
                    style={{
                      height: "210px",
                      background: "#e2e8f0",
                      overflow: "hidden",
                    }}
                  >
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </div>
                  <div style={{ padding: "24px" }}>
                    <div
                      style={{
                        color: "#167f7b",
                        fontSize: "12px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                      }}
                    >
                      {post.category}
                    </div>
                    <h2
                      style={{
                        color: "#06264a",
                        fontSize: "20px",
                        fontWeight: 800,
                        lineHeight: 1.35,
                        margin: "10px 0",
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        minHeight: "70px",
                      }}
                    >
                      {post.excerpt || post.meta_description || ""}
                    </p>
                    <a
                      href={`/blogs/${encodeURIComponent(post.slug)}`}
                      onClick={(event) => {
                        event.preventDefault();
                        loadPost(post.slug);
                      }}
                      style={readButton}
                    >
                      Read article →
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginTop: "30px",
          }}
        >
          <button
            type="button"
            disabled={page <= 1 || loading}
            onClick={() => loadList(page - 1)}
            style={pagerButton}
          >
            Previous
          </button>
          <span style={{ color: "#475569", fontWeight: 600 }}>
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages || loading}
            onClick={() => loadList(page + 1)}
            style={pagerButton}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

const card: React.CSSProperties = {
  height: "100%",
  background: "#fff",
  borderRadius: "18px",
  overflow: "hidden",
  border: "1px solid #e2e8f0",
  boxShadow: "0 12px 30px rgba(6,38,74,.08)",
};
const readButton: React.CSSProperties = {
  border: 0,
  background: "transparent",
  color: "#2376b7",
  fontWeight: 800,
  padding: 0,
  cursor: "pointer",
  textDecoration: "none",
};
const pagerButton: React.CSSProperties = {
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  background: "#fff",
  color: "#06264a",
  padding: "9px 18px",
  fontWeight: 700,
};
const backButton: React.CSSProperties = {
  ...pagerButton,
  marginBottom: "28px",
  cursor: "pointer",
};
const errorBox: React.CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto 30px",
  padding: "15px",
  borderRadius: "10px",
  background: "#fff1f2",
  color: "#be123c",
  textAlign: "center",
};

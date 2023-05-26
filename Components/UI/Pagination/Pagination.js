import Link from "next/link";

import classes from "./Pagination.module.scss";

const Pagination = ({ pageData }) => (
  <div className={classes.Pagination}>
    <ul>
      {/* DISABLE PAGEDOWN BUTTON IF WE'RE ON PAGE 1 */}
      {pageData.page > 1 ? (
        <>
          <Link
            href={`/blog/page/${pageData.page - 1}`}
            passHref
            legacyBehavior
          >
            <li>&lt;</li>
          </Link>

          {/* MAKING PAGE 1 VISIABLE ON EVERY PAGE, except page 2 when that case is handled next */}
          {pageData.page - 1 !== 1 ? (
            <>
              <Link href={`/`} passHref legacyBehavior>
                <li>
                  <a>1</a>
                </li>
              </Link>

              {/* SHOW "..." AS LONG AS WE'RE NOT ON THE FIRST COUPLE PAGES */}
              {pageData.page - 3 > 0 ? <div>...</div> : null}
            </>
          ) : null}

          {/* Always showing a page down from our current page */}
          <Link
            href={`/blog/page/${pageData.page - 1}`}
            passHref
            legacyBehavior
          >
            <li>
              <a>{pageData.page - 1}</a>
            </li>
          </Link>
        </>
      ) : (
        <li className={classes.Pagination__disable}>&lt;</li>
      )}

      {/* SHOW THE CURRENT PAGE IN THE MIDDLE */}
      <li className={classes.Pagination__active}>{pageData.page}</li>

      {/* If we're on something lower than the last page enable the page up button */}
      {pageData.page < pageData.pageCount ? (
        <>
          {pageData.page + 1 !== pageData.pageCount ? (
            <Link
              href={`/blog/page/${pageData.page + 1}`}
              passHref
              legacyBehavior
            >
              <li>
                <a>{pageData.page + 1}</a>
              </li>
            </Link>
          ) : null}

          {/* SHOW "..." AS LONG AS WE'RE NOT ON THE LAST COUPLE OF PAGES */}
          {pageData.page + 2 < pageData.pageCount ? <div>...</div> : null}

          <Link
            href={`/blog/page/${pageData.pageCount}`}
            passHref
            legacyBehavior
          >
            <li>
              <a>{pageData.pageCount}</a>
            </li>
          </Link>
          <Link
            href={`/blog/page/${pageData.page + 1}`}
            passHref
            legacyBehavior
          >
            <li>&gt;</li>
          </Link>
        </>
      ) : (
        <li className={classes.Pagination__disable}>&gt;</li>
      )}
    </ul>
  </div>
);

export default Pagination;

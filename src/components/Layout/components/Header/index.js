import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function Header() {
  const [isChange, setChange] = useState(false);
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleChangeInput = (e) => {
    const value = e.target.value;
    setValue(value);
    if (value !== "") {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  const handleClickClose = (e) => {
    e.preventDefault();
    setValue("");
    setChange(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 2000);
  });
  return (
    <>
      <header className={cx("Wrapper")}>
        <div className={cx("content")}>
          <div className={cx("logo")}>
            <img
              className={cx("logoTikTok")}
              src={images.logo.default}
              alt="Tiktok"
            />
          </div>
          <Tippy
            visible={searchResult.length > 0 ? true : false}
            render={(attrs) => (
              <div className="box" tabIndex="-1" {...attrs}>
                My tippy box
              </div>
            )}
          >
            <form className={cx("search-input")}>
              <input
                type="search"
                placeholder="Search accounts and videos"
                value={value}
                className={cx("Search")}
                onChange={(e) => handleChangeInput(e)}
              />
              {isChange === true ? (
                <button onClick={handleClickClose} className={cx("close")}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              ) : (
                <></>
              )}
              <div className={cx("loading")}>
                <FontAwesomeIcon icon={faSpinner} />
              </div>
              <span className={cx("Bulkhead")}></span>
              <button className={cx("search-icon")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </Tippy>

          <div className={cx("actions")}>
            <a href="#">
              <div className={cx("actions-upload")}>
                <svg
                  className={cx("icon-upload")}
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                  ></path>
                </svg>
                <span className={cx("actions-upload-Name")}>Upload </span>
              </div>
            </a>
            <button type="button" className={cx("actions-login")}>
              Log in
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

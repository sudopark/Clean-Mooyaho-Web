
import React from "react";
import { MetaTags } from "react-meta-tags";
import { useTranslation } from "react-i18next";
import Helmet from "react-helmet";

function Welcome() {

    const { t, i18n } = useTranslation()

    React.useEffect(() => {
        const useLang = navigator.language || navigator.useTranslation
        if(useLang === "ko-KR") {
            window.location.href = "https://readmind.notion.site/1-e7892671b2dd4a27b58a1d8b015088ac"
        } else {
            window.location.href = "https://readmind.notion.site/1-Item-types-de40f903ea9f41d3a059f6844f0de366"
        }
    }, [])

    return (
        <div className="wrapper">
            <Helmet>
                <title>{t("welcome.page.meta.title")}</title>
                <meta id="meta-description" name="description" content={t("welcome.page.meta.desc")} />
                <meta id="og-title" property="og:title" content={t("welcome.page.meta.og-title")} />
            </Helmet>
            <div className="content">redirecting...</div>
        </div>
    )
}


export default Welcome;
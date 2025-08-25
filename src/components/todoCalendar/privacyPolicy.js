
import React from "react";

function TodoCalendarPrivacyPolicy() {

    return (
        <div style={{ width: '100%', height: '100%' }}>
            
            {/* 노션 페이지를 임베드하는 iframe */}
            {/* iframe의 높이를 '100vh'로 설정하여 뷰포트 전체를 채우도록 수정했습니다. */}
            {/* 이 방식으로 빈 공백을 없앨 수 있습니다. */}
            <iframe
                src="https://readmind.notion.site/ebd/194136c8558380149a75ccc38408c727"
                width="100%"
                style={{ height: '100vh', border: 'none', display: 'block' }}
                title="Todo Calendar Guide"
            />
        </div>
    );
}

export default TodoCalendarPrivacyPolicy;
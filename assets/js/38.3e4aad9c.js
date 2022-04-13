(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{476:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"시작하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시작하기"}},[t._v("#")]),t._v(" 시작하기")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("⚡️ 목표")]),t._v(" "),a("p",[t._v("쿠버네티스 실습을 위해 minikube, kubectl을 설치하고 기본적인 사용법을 알아봅니다.")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#가이드"}},[t._v("가이드")])]),a("li",[a("a",{attrs:{href:"#준비"}},[t._v("준비")])]),a("li",[a("a",{attrs:{href:"#minikube"}},[t._v("minikube")])]),a("li",[a("a",{attrs:{href:"#워드프레스-배포"}},[t._v("워드프레스 배포")])]),a("li",[a("a",{attrs:{href:"#마무리"}},[t._v("마무리")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가이드"}},[t._v("#")]),t._v(" 가이드")]),t._v(" "),a("p",[t._v("쿠버네티스는 설치부터 운영, 각종 고급 기능까지 다양한 부분을 알아야 하고 그 과정은 험난하고 처음 접하는 사람을 지치게 합니다. "),a("s",[t._v("이 길은 내 길이 아니여..")])]),t._v(" "),a("p",[t._v("본 가이드는 꼭 알아야 할 최소한의 기능을 배우고 동작 원리를 이해하는 것에 초점을 맞춰 자연스럽게 고급 기능을 익히고 나머지 설정을 찾아볼 수 있도록 구성하였습니다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("주의")]),t._v(" "),a("p",[t._v("실습은 쿠버네티스 "),a("code",[t._v("v1.23")]),t._v("에서 진행하였습니다. 특정 버전(하위 버전)에서 실습할 때 오류가 발생할 수 있습니다.")])]),t._v(" "),a("h2",{attrs:{id:"준비"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#준비"}},[t._v("#")]),t._v(" 준비")]),t._v(" "),a("p",[t._v("실습을 위한 쿠버네티스 클러스터와 kubectl을 설치합니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/prepare/kubernetes-setup.html"}},[t._v("쿠버네티스(minikube) 설치")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/prepare/kubectl-setup.html"}},[t._v("kubectl 설치")])],1)]),t._v(" "),a("h2",{attrs:{id:"minikube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minikube"}},[t._v("#")]),t._v(" minikube")]),t._v(" "),a("p",[t._v("minikube는 쿠버네티스의 모든 기능을 테스트할 순 없지만 쿠버네티스의 기본적인 기능을 익히고 친해지는데 가장 좋은 도구입니다. 대부분의 환경에서 사용할 수 있고 간편하며, 무료(!)입니다.")]),t._v(" "),a("p",[t._v("실습하는 동안 minikube를 켜고 실습이 완료되면 종료합니다. 내 CPU, 메모리는 소중하니까요.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minikube 상태확인")]),t._v("\nminikube status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minikube 실행")]),t._v("\nminikube start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 특정 k8s 버전 실행")]),t._v("\nminikube start --kubernetes-version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v1.23.1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 특정 driver 실행")]),t._v("\nminikube start --driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("virtualbox --kubernetes-version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v1.23.1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minikube ip 확인 (접속테스트시 필요)")]),t._v("\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minikube 종료")]),t._v("\nminikube stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minikube 제거")]),t._v("\nminikube delete\n")])])]),a("h2",{attrs:{id:"워드프레스-배포"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#워드프레스-배포"}},[t._v("#")]),t._v(" 워드프레스 배포")]),t._v(" "),a("p",[t._v("실습의 1차 목표는 PHP와 MySQL로 구성된 워드프레스를 쿠버네티스로 배포하기입니다. 쿠버네티스 세계에서 웹 애플리케이션 배포는 가장 흔한 작업입니다. 도커에 익숙한 분들을 위하여 도커 컴포즈"),a("sup",[t._v("docker-compose")]),t._v("를 이용한 배포와 차이점을 확인해보겠습니다.")]),t._v(" "),a("custom-image",{attrs:{src:"/imgs/guide/index/wordpress-docker.png",alt:"wordpress(docker)"}}),t._v(" "),a("p",[t._v("도커 컴포즈를 이용한 배포는 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wordpress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5.9.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("php8.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("apache\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("WORDPRESS_DB_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("WORDPRESS_DB_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("WORDPRESS_DB_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("WORDPRESS_DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30000:80"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mariadb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.7")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n")])])]),a("code-link",{attrs:{link:"guide/index/docker-compose.yml"}}),t._v(" "),a("p",[t._v("워드프레스 컨테이너 하나, MySQL 컨테이너 하나, 그리고 각각 포트와 환경변수 설정을 하면 끝입니다. 간단하죠?")]),t._v(" "),a("p",[a("code",[t._v("localhost:30000")]),t._v("으로 접속하여 테스트합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("실습하기")]),t._v(" "),a("p",[t._v("YAML 코드 하단에 표시된 링크("),a("code",[t._v("guide/index/docker-compose.yml")]),t._v(")를 누르면 raw 설정파일을 다운받을 수 있습니다. 가급적 동일한 폴더를 만들어 실습합니다.")])]),t._v(" "),a("p",[t._v("이제, 쿠버네티스로 배포합니다. 쿠버네티스는 조금 "),a("s",[t._v("많이")]),t._v(" 더 다양한 컴포넌트로 구성됩니다.")]),t._v(" "),a("custom-image",{attrs:{src:"/imgs/guide/index/wordpress-k8s.png",alt:"wordpress(k8s)"}}),t._v(" "),a("p",[t._v("Service, Pod, ReplicaSet, Deployment, ... 정확하게 뭐가 뭔지 모르겠지만 👀 "),a("code",[t._v("아.. 이게 쿠버네티스의 철학이구나!")]),t._v("라고 이해하고 일단 무작정 설정파일"),a("sup",[t._v("spec")]),t._v("를 작성해봅니다.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mysql\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mariadb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.7")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MYSQL_DATABASE\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MYSQL_ROOT_PASSWORD\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mysql\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" frontend\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" frontend\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5.9.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("php8.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("apache\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WORDPRESS_DB_HOST\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mysql\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WORDPRESS_DB_NAME\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WORDPRESS_DB_USER\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WORDPRESS_DB_PASSWORD\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodePort\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wordpress\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" frontend\n")])])]),a("code-link",{attrs:{link:"guide/index/wordpress-k8s.yml"}}),t._v(" "),a("p",[t._v("위 소스를 "),a("code",[t._v("wordpress-k8s.yml")]),t._v(" 파일로 저장하고 다음과 같은 명령어를 실행합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wordpress-k8s.yml 설정 적용")]),t._v("\nkubectl apply -f wordpress-k8s.yml\n")])])]),a("p",[t._v("배포 상태를 확인합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 상태 확인")]),t._v("\nkubectl get all\n")])])]),a("p",[a("strong",[t._v("실행 결과")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("NAME                                  READY   STATUS    RESTARTS   AGE\npod/wordpress-5f59577d4d-8t2dg        1/1     Running   0          103s\npod/wordpress-mysql-545d9c6dc-dwnjp   1/1     Running   0          103s\n\nNAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\nservice/kubernetes        ClusterIP   10.96.0.1       <none>        443/TCP        7m17s\nservice/wordpress         NodePort    10.107.20.190   <none>        80:31400/TCP   103s\nservice/wordpress-mysql   ClusterIP   10.106.50.61    <none>        3306/TCP       103s\n\nNAME                              READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/wordpress         1/1     1            1           103s\ndeployment.apps/wordpress-mysql   1/1     1            1           103s\n\nNAME                                        DESIRED   CURRENT   READY   AGE\nreplicaset.apps/wordpress-5f59577d4d        1         1         1       103s\nreplicaset.apps/wordpress-mysql-545d9c6dc   1         1         1       103s\n")])])]),a("p",[a("code",[t._v("wordpress-5f59577d4d-8t2dg")]),t._v("와 "),a("code",[t._v("pod/wordpress-mysql-545d9c6dc-dwnjp")]),t._v("의 상태"),a("sup",[t._v("Status")]),t._v("가 "),a("code",[t._v("Running")]),t._v("인지 확인하고 "),a("code",[t._v("service/wordpress")]),t._v("의 포트가 몇번인지 (여기선 "),a("code",[t._v("31400")]),t._v(") 확인합니다.")]),t._v(" "),a("p",[t._v("그리고 "),a("code",[t._v("minikube ip")]),t._v(" 명령어로 얻은 주소로 접속합니다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Docker")]),t._v(" "),a("p",[t._v("Docker driver를 사용중이라면 "),a("code",[t._v("minikube service wordpress")]),t._v(" 명령어를 이용하여 접속하세요.")])]),t._v(" "),a("custom-image",{attrs:{src:"/imgs/guide/index/wordpress.png",alt:"wordpress"}}),t._v(" "),a("p",[t._v("🎉 축하합니다! 첫번째 쿠버네티스 배포에 성공했습니다.")]),t._v(" "),a("h2",{attrs:{id:"마무리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[t._v("#")]),t._v(" 마무리")]),t._v(" "),a("p",[t._v("워드프레스 리소스를 제거합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl delete -f wordpress-k8s.yml\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);
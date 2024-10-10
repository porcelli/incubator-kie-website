"use strict";(self.webpackChunkkie_site=self.webpackChunkkie_site||[]).push([[455],{5912:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var r=i(5893),l=i(1151);const s={id:"build",title:"Build from Source",sidebar_position:2},o=void 0,t={id:"community/build",title:"Build from Source",description:"Complete Environment requirements:",source:"@site/docs/community/build.md",sourceDirName:"community",slug:"/community/build",permalink:"/docs/community/build",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"build",title:"Build from Source",sidebar_position:2},sidebar:"communitySidebar",previous:{title:"How to verify",permalink:"/docs/community/verify"}},c={},a=[{value:"Complete Environment requirements:",id:"complete-environment-requirements",level:3},{value:"1. Obtain the Source Code",id:"1-obtain-the-source-code",level:3},{value:"Download the Source Archive",id:"download-the-source-archive",level:4},{value:"Extract the Source Archive",id:"extract-the-source-archive",level:4},{value:"2. Navigate to the Source Directory",id:"2-navigate-to-the-source-directory",level:3},{value:"3. Building Individual Components",id:"3-building-individual-components",level:3},{value:"3.1. Drools",id:"31-drools",level:3},{value:"3.2. OptaPlanner",id:"32-optaplanner",level:3},{value:"3.3. Kogito Runtimes",id:"33-kogito-runtimes",level:3},{value:"3.4. Kogito Apps",id:"34-kogito-apps",level:3},{value:"3.5. Kogito Images",id:"35-kogito-images",level:3},{value:"3.6. KIE Sandbox Quarkus Accelerator",id:"36-kie-sandbox-quarkus-accelerator",level:3},{value:"3.7. KIE Tools",id:"37-kie-tools",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"complete-environment-requirements",children:"Complete Environment requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Temurin JDK 17.0.11"}),"\n",(0,r.jsx)(n.li,{children:"Maven 3.9.6"}),"\n",(0,r.jsx)(n.li,{children:"GraalVM for JDK 17"}),"\n",(0,r.jsx)(n.li,{children:"Docker 25+"}),"\n",(0,r.jsx)(n.li,{children:"Python 3.12"}),"\n",(0,r.jsx)(n.li,{children:"Make 4.3+"}),"\n",(0,r.jsx)(n.li,{children:"Node 20"}),"\n",(0,r.jsx)(n.li,{children:"PNPM 9.3.0"}),"\n",(0,r.jsx)(n.li,{children:"Go 1.21.9"}),"\n",(0,r.jsx)(n.li,{children:"Helm 3.15.2"}),"\n",(0,r.jsx)(n.li,{children:"CEkit 4.11.0 (pip install)"}),"\n",(0,r.jsx)(n.li,{children:"Docker Python Bindings 7.0.0 (pip install)"}),"\n",(0,r.jsx)(n.li,{children:"Docker Squash Tool 1.2.0 (pip install)"}),"\n",(0,r.jsx)(n.li,{children:"Ruamel YAML 0.18.5 (pip install)"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"If you're using a different engine for docker api, Cekit and other tools will require the DOCKER_HOST to be properly setup."}),(0,r.jsx)(n.p,{children:"If using colima:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export DOCKER_HOST=unix://${HOME}/.colima/default/docker.sock\n"})}),(0,r.jsx)(n.p,{children:"if using rancher:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export DOCKER_HOST=unix://$HOME/.rd/docker.sock\n"})}),(0,r.jsx)(n.p,{children:"if using podman:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/podman/podman.sock\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"1-obtain-the-source-code",children:"1. Obtain the Source Code"}),"\n",(0,r.jsx)(n.p,{children:"The first step in building from source is to obtain and extract the source code archive. This archive is available in both release candidates and final releases."}),"\n",(0,r.jsx)(n.h4,{id:"download-the-source-archive",children:"Download the Source Archive"}),"\n",(0,r.jsx)(n.p,{children:"Use the following pattern to locate and download the source zip:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"https://dist.apache.org/repos/dist/dev/incubator/kie/${release_version}-${rc_version}/incubator-kie-${release_version}-${rc_version}-sources.zip\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"${release_version}"})," and ",(0,r.jsx)(n.code,{children:"${rc_version}"})," with the appropriate values. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"https://dist.apache.org/repos/dist/dev/incubator/kie/10.0.0-rc2/incubator-kie-10.0.0-rc2-sources.zip\n"})}),"\n",(0,r.jsx)(n.h4,{id:"extract-the-source-archive",children:"Extract the Source Archive"}),"\n",(0,r.jsx)(n.p,{children:"Once downloaded, extract the contents of the zip file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"unzip incubator-kie-${release_version}-${rc_version}-sources.zip\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-navigate-to-the-source-directory",children:"2. Navigate to the Source Directory"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd incubator-kie-${release_version}-${rc_version}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"incubator-kie-drools"}),"\n",(0,r.jsx)(n.li,{children:"incubator-kie-kogito-apps"}),"\n",(0,r.jsx)(n.li,{children:"incubator-kie-kogito-images"}),"\n",(0,r.jsx)(n.li,{children:"incubator-kie-kogito-runtimes"}),"\n",(0,r.jsx)(n.li,{children:"incubator-kie-optaplanner"}),"\n",(0,r.jsx)(n.li,{children:"incubator-kie-sandbox-quarkus-accelerator"}),"\n",(0,r.jsx)(n.li,{children:"incubator-kie-tools"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We'll build each of these components individually."}),"\n",(0,r.jsx)(n.h3,{id:"3-building-individual-components",children:"3. Building Individual Components"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["It's recommended to clean the local ",(0,r.jsx)(n.code,{children:"~/.m2"})," repository, because its content will be incorporated in some container images during the build."]})}),"\n",(0,r.jsx)(n.h3,{id:"31-drools",children:"3.1. Drools"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Temurin JDK 17.0.11"}),"\n",(0,r.jsx)(n.li,{children:"Maven 3.9.6"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Build Commands:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd incubator-kie-drools\ngit init .\nmvn clean install -DskipTests -Dfull -Donly.reproducible=true\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Produced Artifacts:"})," JARs will be installed to local Maven repository."]}),"\n",(0,r.jsx)(n.h3,{id:"32-optaplanner",children:"3.2. OptaPlanner"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Temurin JDK 17.0.11"}),"\n",(0,r.jsx)(n.li,{children:"Maven 3.9.6"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Build Commands:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd incubator-kie-optaplanner\nmvn clean install -DskipTests -Dfull -Donly.reproducible=true\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Produced Artifacts:"})," JARs will be installed to local Maven repository."]}),"\n",(0,r.jsx)(n.h3,{id:"33-kogito-runtimes",children:"3.3. Kogito Runtimes"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Temurin JDK 17.0.11"}),"\n",(0,r.jsx)(n.li,{children:"Maven 3.9.6"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Build Commands:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd incubator-kie-kogito-runtimes\nmvn clean install -DskipTests -Dfull -Donly.reproducible=true\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Produced Artifacts:"})," JARs will be installed to local Maven repository."]}),"\n",(0,r.jsx)(n.h3,{id:"34-kogito-apps",children:"3.4. Kogito Apps"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Temurin JDK 17.0.11"}),"\n",(0,r.jsx)(n.li,{children:"Maven 3.9.6"}),"\n",(0,r.jsx)(n.li,{children:"GraalVM for JDK 17"}),"\n",(0,r.jsx)(n.li,{children:"Docker 25+"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"If you're using Podman as a docker api, to build Kogito Apps you'll need to pass this variable"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"-Djib.dockerClient.executable=$(which podman)\n"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Build Commands:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd incubator-kie-kogito-apps\nmvn clean install -DskipTests -Dfull -Donly.reproducible=true -Pjitexecutor-native\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Produced Artifacts:"})," JARs will be installed to local Maven repository."]}),"\n",(0,r.jsx)(n.h3,{id:"35-kogito-images",children:"3.5. Kogito Images"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Temurin JDK 17.0.11"}),"\n",(0,r.jsx)(n.li,{children:"Maven 3.9.6"}),"\n",(0,r.jsx)(n.li,{children:"Python 3.12"}),"\n",(0,r.jsx)(n.li,{children:"Docker 25+"}),"\n",(0,r.jsx)(n.li,{children:"Make 4.3+"}),"\n",(0,r.jsx)(n.li,{children:"CEkit 4.11.0"}),"\n",(0,r.jsx)(n.li,{children:"Docker Python Bindings 7.0.0"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Build Commands:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd incubator-kie-kogito-images\ncekit --descriptor kogito-base-builder-image.yaml build docker --platform linux/amd64\nmake build-image KOGITO_APPS_TARGET_BRANCH=10.0.0-rc2 ignore_test=true image_name=kogito-data-index-ephemeral\nmake build-image KOGITO_APPS_TARGET_BRANCH=10.0.0-rc2 ignore_test=true image_name=kogito-data-index-postgresql\nmake build-image KOGITO_APPS_TARGET_BRANCH=10.0.0-rc2 ignore_test=true image_name=kogito-jit-runner\nmake build-image KOGITO_APPS_TARGET_BRANCH=10.0.0-rc2 ignore_test=true image_name=kogito-jobs-service-allinone\nmake build-image KOGITO_APPS_TARGET_BRANCH=10.0.0-rc2 ignore_test=true image_name=kogito-jobs-service-ephemeral\nmake build-image KOGITO_APPS_TARGET_BRANCH=10.0.0-rc2 ignore_test=true image_name=kogito-jobs-service-postgresql\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Produced Artifacts:"})," Images will be pushed to the local Container registry."]}),"\n",(0,r.jsx)(n.h3,{id:"36-kie-sandbox-quarkus-accelerator",children:"3.6. KIE Sandbox Quarkus Accelerator"}),"\n",(0,r.jsx)(n.p,{children:"Build is not required. The source itself is the artifact."}),"\n",(0,r.jsx)(n.h3,{id:"37-kie-tools",children:"3.7. KIE Tools"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Environment Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Temurin JDK 17.0.11"}),"\n",(0,r.jsx)(n.li,{children:"Maven 3.9.6"}),"\n",(0,r.jsx)(n.li,{children:"Node 20"}),"\n",(0,r.jsx)(n.li,{children:"PNPM 9.3.0"}),"\n",(0,r.jsx)(n.li,{children:"Go 1.21.9"}),"\n",(0,r.jsx)(n.li,{children:"Python 3.12"}),"\n",(0,r.jsx)(n.li,{children:"Helm 3.15.2"}),"\n",(0,r.jsx)(n.li,{children:"Docker 25+"}),"\n",(0,r.jsx)(n.li,{children:"Make"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Build Commands:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cd incubator-kie-tools\ngit config user.name "Your Name"\ngit config user.email "your-email@company.com"\ngit init . && git add . && git commit -m "."\npnpm bootstrap && KIE_TOOLS_BUILD__runTests=false KIE_TOOLS_BUILD__buildExamples=true KIE_TOOLS_BUILD__buildContainerImages=true pnpm -r --workspace-concurrency=1 build:prod && echo \'BUILD SUCCESS! \ud83c\udf89\' || echo \'BUILD FAILURE \u274c\'\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Produced Artifacts:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JARs will be installed to local Maven repository"}),"\n",(0,r.jsx)(n.li,{children:"Images will be pushed to the local Container registry"}),"\n",(0,r.jsxs)(n.li,{children:["Binaries and final artifacts at:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"packages/*/dist"}),"\n",(0,r.jsx)(n.li,{children:"examples/*/dist"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>o});var r=i(7294);const l={},s=r.createContext(l);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
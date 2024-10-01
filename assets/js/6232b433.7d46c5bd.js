"use strict";(self.webpackChunkkie_site=self.webpackChunkkie_site||[]).push([[805],{2027:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=i(5893),t=i(1151);const r={id:"verify",title:"How to verify",sidebar_position:1},c="Verify the release artifacts",a={id:"community/verify",title:"How to verify",description:"Following is the basic check items for the release artifacts.",source:"@site/docs/community/verify.md",sourceDirName:"community",slug:"/community/verify",permalink:"/docs/community/verify",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"verify",title:"How to verify",sidebar_position:1},sidebar:"communitySidebar",previous:{title:"Community",permalink:"/docs/community/"},next:{title:"Build from Source",permalink:"/docs/community/build"}},l={},o=[{value:"Download the candidate version",id:"download-the-candidate-version",level:2},{value:"Checksums and signatures",id:"checksums-and-signatures",level:2},{value:"Verify checksums and signatures",id:"verify-checksums-and-signatures",level:3},{value:"GnuPG setup",id:"gnupg-setup",level:4},{value:"How to verify the signatures",id:"how-to-verify-the-signatures",level:4},{value:"Check the file content of the source package",id:"check-the-file-content-of-the-source-package",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"verify-the-release-artifacts",children:"Verify the release artifacts"}),"\n",(0,n.jsx)(s.p,{children:"Following is the basic check items for the release artifacts."}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Download links are valid."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Checksums and PGP signatures are valid."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Source code distributions have correct names matching the current release."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","LICENSE and NOTICE files are correct."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","All files have license headers if necessary."]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","No unlicensed compiled archives bundled in source archive."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For detailed check list, please refer to the ",(0,n.jsx)(s.a,{href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist",children:"official check list"})]}),"\n",(0,n.jsx)(s.h2,{id:"download-the-candidate-version",children:"Download the candidate version"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"#If there is svn locally, you can clone to the local\nsvn co https://dist.apache.org/repos/dist/dev/incubator/kie/${release_version}-${rc_version}/\n# You can download the material file directly\nwget https://dist.apache.org/repos/dist/dev/incubator/kie/${release_version}-${rc_version}/xxx.xxx\n"})}),"\n",(0,n.jsx)(s.h2,{id:"checksums-and-signatures",children:"Checksums and signatures"}),"\n",(0,n.jsx)(s.p,{children:"The release candidate artificas should have a checksum and signature file."}),"\n",(0,n.jsxs)(s.p,{children:["For example, if the release candidate is ",(0,n.jsx)(s.code,{children:"10.0.0-rc1"}),", the checksum and signature file should be:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"https://dist.apache.org/repos/dist/dev/incubator/kie/10.0.0-rc1/incubator-kie-10.0.0-rc1-sources.zip.sha512\n\nhttps://dist.apache.org/repos/dist/dev/incubator/kie/10.0.0-rc1/incubator-kie-10.0.0-rc1-sources.zip.asc\n"})}),"\n",(0,n.jsx)(s.h3,{id:"verify-checksums-and-signatures",children:"Verify checksums and signatures"}),"\n",(0,n.jsx)(s.h4,{id:"gnupg-setup",children:"GnuPG setup"}),"\n",(0,n.jsx)(s.p,{children:"GnuPG is recommended here. It can be installed with the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"apt-get install gnupg\n# or\nyum install gnupg\n# or\nbrew install gnupg\n"})}),"\n",(0,n.jsx)(s.p,{children:"Firstly, import the  Apache KIE Automated Release Signing public key:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"curl https://downloads.apache.org/incubator/kie/KEYS > KEYS\ngpg --import KEYS # Import KEYS to local\n"})}),"\n",(0,n.jsx)(s.p,{children:"Then, trust the public key:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpg --edit-key kie\n"})}),"\n",(0,n.jsx)(s.p,{children:"It will enter the interactive mode, use the following command to trust the key:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpg> trust\n"})}),"\n",(0,n.jsx)(s.p,{children:"And then, select the level of trust, for example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Please decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Select ",(0,n.jsx)(s.code,{children:"5"})," to trust the key ultimately."]}),"\n",(0,n.jsx)(s.h4,{id:"how-to-verify-the-signatures",children:"How to verify the signatures"}),"\n",(0,n.jsx)(s.p,{children:"Next verify signature:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"for i in *.{tar.gz,zip,vsix}; do echo $i; gpg --verify $i.asc $i; done\n"})}),"\n",(0,n.jsx)(s.p,{children:"If something like the following appears, it means the signature is correct:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'incubator-kie-10.0.0-rc1-sources.zip\ngpg: Signature made Fri Sep 27 15:53:27 2024 EDT\ngpg:                using RSA key 1384A644F9BFA0F54C84488C3B0DD7480424A676\ngpg: Good signature from "Apache KIE Automated Release Signing <private@kie.apache.org>" [ultimate]\n'})}),"\n",(0,n.jsx)(s.p,{children:"Then verify checksum:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"for i in *.{tar.gz,zip,vsix}; do echo $i; sha512sum --check $i.sha512; done\n"})}),"\n",(0,n.jsx)(s.p,{children:"It should output something like:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"incubator-kie-10.0.0-rc1-sources.zip\nincubator-kie-10.0.0-rc1-sources.zip: OK\n"})}),"\n",(0,n.jsx)(s.h2,{id:"check-the-file-content-of-the-source-package",children:"Check the file content of the source package"}),"\n",(0,n.jsxs)(s.p,{children:["Unzip ",(0,n.jsx)(s.code,{children:"apache-kie-${release_version}-${rc_version}-sources.zip"})," and check the follows:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"LICENSE and NOTICE files are correct for each subfolder."}),"\n",(0,n.jsx)(s.li,{children:"All files have ASF license headers if necessary."}),"\n",(0,n.jsxs)(s.li,{children:["You are able to ",(0,n.jsx)(s.a,{href:"build",children:"build from source"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>a,a:()=>c});var n=i(7294);const t={},r=n.createContext(t);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);
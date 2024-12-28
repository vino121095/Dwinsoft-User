"use client";

import Layout from "@/app/modules/layouts/common/page";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Terms() {
  return (
    <Layout>
      <div className="about-page container-fluid">
        {/* 1st Module Starts */}

        <div className="row">
          <div
            className="col-md-12 full-length-bg"
            id="bannersection"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              className="image-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url('/Image/privacy.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
            ></div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div id="bannerhead">
                    <h1 style={{ color: "white" }}>Terms & Conditions</h1>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="bannertext">
                    <h6>
                      {" "}
                      <Link href="/">
                        <button href="#" className="" id="allbanner">
                          {" "}
                          Home /
                        </button>
                      </Link>
                      Terms & Conditions
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Module Starts */}
        <div className="col-md-12" id="sect">
          <div className="container">
            <div className="row">
              <h2 style={{textAlign:"justify"}}>Terms & Conditions</h2>

              <p  style={{textAlign:"justify", marginLeft: "18px"}}>
                By Visiting our website or using the app, these terms will
                automatically apply to you – you should make sure therefore that
                you read them carefully before using the app. You’re not allowed
                to copy or modify the app, any part of the app, or our
                trademarks in any way. You’re not allowed to attempt to extract
                the source code of the app, and you also shouldn’t try to
                translate the app into other languages or make derivative
                versions. The app itself, and all the trademarks, copyright,
                database rights, and other intellectual property rights related
                to it, still belong to Dwinsoft Technologies India Private
                Limited.
              </p>
              <h7 style={{color: "#09007a"}}>Reserved the right to change</h7>
              <p style={{marginLeft: "13px"}}>
                Dwinsoft Technologies India Private Limited is committed to
                ensuring that the app is as useful and efficient as possible.
                For that reason, we reserve the right to make changes to the app
                or to charge for its services, at any time and for any reason.
                We will never charge you for the app or its services without
                making it very clear to you exactly what you’re paying for.
              </p>
              <h7 style={{color: "#09007a"}}>Data Protection</h7>
              <p style={{marginLeft: "13px"}}>
                Our application stores and processes personal data that you have
                provided to us, to provide our Service. It’s your responsibility
                to keep your phone and access to the app secure. We therefore
                recommend that you do not jailbreak or root your phone, which is
                the process of removing software restrictions and limitations
                imposed by the official operating system of your device. It
                could make your phone vulnerable to malware/viruses/malicious
                programs, compromise your phone’s security features and it could
                mean that our application won’t work properly or at all.
              </p>
              <h7 style={{color: "#09007a"}}>Internet Connection</h7>
              <p style={{marginLeft: "13px"}}>
                You should be aware that there are certain things that Dwinsoft
                Technologies India Private Limited will not take responsibility
                for. Certain functions of the app will require the app to have
                an active internet connection. The connection can be Wi-Fi or
                provided by your mobile network provider, but Dwinsoft
                Technologies India Private Limited cannot take responsibility
                for the app not working at full functionality if you don’t have
                access to Wi-Fi, and you don’t have any of your data allowance
                left.
              </p>
              <p style={{marginLeft: "13px"}}>
                If you’re using the app outside of an area with Wi-Fi, you
                should remember that the terms of the agreement with your mobile
                network provider will still apply. As a result, you may be
                charged by your mobile provider for the cost of data for the
                duration of the connection while accessing the app, or other
                third-party charges. In using the app, you’re accepting
                responsibility for any such charges, including roaming data
                charges if you use the app outside of your home territory (i.e.
                region or country) without turning off data roaming. If you are
                not the bill payer for the device on which you’re using the app,
                please be aware that we assume that you have received permission
                from the bill payer for using the app.
              </p>
              <h7 style={{color: "#09007a"}}>Way of Use</h7>
              <p style={{marginLeft: "13px"}}>
                Along the same lines, Dwinsoft Technologies India Private
                Limited cannot always take responsibility for the way you use
                the app i.e. You need to make sure that your device stays
                charged – if it runs out of battery and you can’t turn it on to
                avail the Service, Dwinsoft Technologies India Private Limited
                cannot accept responsibility.
              </p>
              <h7 style={{color: "#09007a"}}>Application Update</h7>
              <p style={{marginLeft: "13px"}}>
                With respect to Dwinsoft Technologies India Private Limited’s
                responsibility for your use of the app, when you’re using the
                app, it’s important to bear in mind that although we endeavor to
                ensure that it is updated and correct at all times, we do rely
                on third parties to provide information to us so that we can
                make it available to you. Dwinsoft Technologies India Private
                Limited accepts no liability for any loss, direct or indirect,
                you experience as a result of relying completely on this
                functionality of the app.
              </p>
              <p style={{marginLeft: "13px"}}>
                At some point, we may wish to update the app. The app is
                currently available on – the requirements for the system(and for
                any additional systems we decide to extend the availability of
                the app to) may change, and you’ll need to download the updates
                if you want to keep using the app. Dwinsoft Technologies India
                Private Limited does not promise that it will always update the
                app so that it is relevant to you and/or works with the version
                that you have installed on your device. However, you promise to
                always accept updates to the application when offered to you, We
                may also wish to stop providing the app, and may terminate use
                of it at any time without giving notice of termination to you.
                Unless we tell you otherwise, upon any termination, (a) the
                rights and licenses granted to you in these terms will end; (b)
                you must stop using the app, and (if needed) delete it from your
                device.
              </p>
              <h7 style={{color: "#09007a"}}>Changes to This Terms and Conditions</h7>
              <p style={{marginLeft: "13px"}}>
                We may update our Terms and Conditions from time to time. Thus,
                you are advised to review this page periodically for any
                changes. We will notify you of any changes by posting the new
                Terms and Conditions on this page
              </p>
              <p style={{marginLeft: "13px"}}>These terms and conditions are effective as of 2023-03-22.</p>
              <h7 style={{color: "#09007a"}}>Contact Us</h7>
              <p style={{marginLeft: "13px"}}>
                If you have any questions or suggestions about our Terms and
                Conditions, do not hesitate to contact us at{" "}
                <a href="">info@dwinsoft.in</a>
              </p>
            </div>
          </div>
        </div>
        {/* 2nd Module Starts */}
      </div>
    </Layout>
  );
}

export default Terms;

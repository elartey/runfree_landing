import React from "react";

const Terms = () => (
    <div style={{height: "0px"}} role="dialog" aria-modal="true" aria-haspopup="true" tabindex="-1" aria-live="assertive"
    aria-describedby="dialog-description" class="modal-dialog no--bg dialog" id="openModal">
    <div class="modal">
        <a href="#close" title="Close" tabindex="1" role="button" accesskey="x" class="close no__select"
            id="close-modal"
            onclick="document.getElementById('openModal').style.display='none';return true;"><strong>×</strong></a>
        <div class="inner-dialog">
            <img src="img/logo.png" style={{height: "72px", width: "auto"}} alt="IE6 preview" /> <br />
            <h4>THIS IS NOT AN INSURANCE PLAN</h4> <br />
            <h4> Membership Application</h4> <br />

            <p> I hereby apply for membership of my family in the Day Kare Ambulance Subscription Program. I
                understand that
                the enclosed annual fee will only provide coverage for me. and my spouse and any dependent children
                that are 6
                years of age or older residing at my residence I will also need to obtain a membership plan as well.
                Membership
                will be provided to additional family members at a discounted rate of 20%. </p> <br />


            <h4 style={{background: "red", color: "white", textAlign: "center"}}> Medical Authorization/Assignment of Benefits </h4>
            <p>I understand that my subscription membership is not an insurance plan and that Day Kare will bill and
                receive
                payments from my insurer or third party if I have a policy that covers any additional services that
                may be needed. I
                hereby authorize any holder of medical or other information about me to release to the Day Kare
                Ambulance
                Service/Runn Free Technology Billing Services, and its agents, any information needed to determine
                benefits or
                the benefits payable for related services or any type of insurance claim, now or in the future. I
                permit a copy of
                this authorization to be used in place of the original, and request that payment available under any
                insurance to
                be made payable directly to the Day Kare Ambulance Service/EMS. In the event payment(s) are made or
                sent to
                me, I agree to immediately endorse and forward them to the Day Kare Ambulance Service/EMS.</p> <br />

            <h4 style={{background: "red", color: "white", textAlign: "center"}}> Lifetime Signature Authorization</h4>
            <p>To facilitate processing, I authorize the release to Day Kare Ambulance Service/EMS, and the GAHS or
                other
                insurer of any medical information or documentation held by anyone necessary to process a claim
                whether in the
                past, now or in the future, and further assign and authorize such payments to Day Kare Ambulance
                Service/EMS. I
                permit a copy of this authorization to be used in place of the original. The Day Kare Ambulance
                Subscription
                Program is not insurance. My membership will not apply if transported by an Ambulance Company other
                than Day
                Kare Ambulance Service/EMS or if I’m transported to any hospital other than a GAHS facility in my
                coverage area.</p> <br />
            <p>I understand that Day Kare Transport. provides medically necessary ambulance transportation and that
                any violations of the terms of this agreement may result in immediate cancellation of my membership
                or
                other penalty. I also understand that this membership is non-refundable and non-transferable.</p>
        </div>
        <div class="footer-modal link--ltr  no__select" style={{background: "red"}}>
            <a href="#close" role="button" accesskey="x" class="" id="footer-close"
                onclick="document.getElementById('openModal').style.display='none';return true;">Click to agree to
                T&C</a>
        </div>
    </div>
</div>
);

export default Terms;
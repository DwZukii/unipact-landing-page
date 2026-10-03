const APP_URL = "https://app.unipact.my";

export default function CompanyCta() {
  return (
    <div className="form-container company-cta">
      <h4>Post a project</h4>
      <p className="company-cta-lead">
        Create a company account, post a fixed-scope brief for free, and UniPact proposes a
        hand-picked team for you to approve before any work starts.
      </p>

      <ul className="company-cta-points">
        <li>Free to post, no card needed</li>
        <li>A proposed team within 48 hours</li>
        <li>Escrow holds payment until each milestone is verified</li>
      </ul>

      <a className="btn btn-primary btn-block" href={`${APP_URL}/register/company`}>
        Create a company account
      </a>
      <p className="company-cta-alt">
        Already working with us? <a href={`${APP_URL}/login`}>Log in to your dashboard</a>
      </p>
    </div>
  );
}

import {
  arrow_back,
  star,
  star_outlined,
  // user
} from "assets";
import { Dashboard as DashboardLayout } from "layout";
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IUser } from "types";
import { getUserById } from "services/Users";
import { Loader } from "components";

const UserDetails = () => {
  let { id } = useParams();
  const [userData, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const fetchUser = useCallback(async (id: string) => {
    let data = await getUserById(id);
    setUser(data);
  }, []);

  useEffect(() => {
    fetchUser(id as string);
  }, [fetchUser, id]);

  return (
    <DashboardLayout>
      {userData === null ? (
        <Loader />
      ) : (
        <>
          <div onClick={() => navigate(-1)} className="go-back">
            <img src={arrow_back} alt="go back" className="icon" />
            <p>Back to Users</p>
          </div>

          <div className="details-header">
            <h2>User Details</h2>
            <div className="action-button">
              <button className="danger">Blacklist User</button>
              <button className="primary">Activate User</button>
            </div>
          </div>

          <div className="details-card">
            <div className="info">
              <div className="info-avatar">
                <img
                  src={userData.profile.avatar}
                  alt={
                    userData.profile.firstName + " " + userData.profile.lastName
                  }
                  className="avatar"
                />
              </div>
              <div className="info-section divider">
                <h4>
                  {userData.profile.firstName} {userData.profile.lastName}
                </h4>
                <p>{userData.phoneNumber}</p>
              </div>
              <div className="info-section divider">
                <p>Users Tier</p>
                <div className="ratings">
                  <img src={star} alt="star" className="icon" />
                  <img
                    src={star_outlined}
                    alt="star_outlined"
                    className="icon"
                  />
                  <img
                    src={star_outlined}
                    alt="star_outlined"
                    className="icon"
                  />
                </div>
              </div>
              <div className="info-section">
                <h4>{userData.accountBalance}</h4>
                <p>{userData.accountNumber}/Providus Bank</p>
              </div>
            </div>

            <div className="tabs">
              <div className="tab active">General Details</div>
              <div className="tab">Documents</div>
              <div className="tab">Bank Details</div>
              <div className="tab">Loans</div>
              <div className="tab">Savings</div>
              <div className="tab">App and System</div>
            </div>
          </div>

          <div className="details-card">
            <div className="details-section">
              <h4>Personal Information</h4>
              <div className="section-info">
                <div>
                  <label>Full name</label>
                  <p>
                    {userData.profile.firstName} {userData.profile.lastName}
                  </p>
                </div>
                <div>
                  <label>Phone number</label>
                  <p>{userData.profile.phoneNumber}</p>
                </div>
                <div>
                  <label>Email Address</label>
                  <p>{userData.email}</p>
                </div>
                <div>
                  <label>BVN</label>
                  <p>{userData.profile.bvn}</p>
                </div>
                <div>
                  <label>Gender</label>
                  <p>{userData.profile.gender}</p>
                </div>
                <div>
                  <label>Marital Status</label>
                  <p>N/A</p>
                </div>
                <div>
                  <label>Children</label>
                  <p>N/A</p>
                </div>
                <div>
                  <label>Type of Residence</label>
                  <p>N/A</p>
                </div>
              </div>
            </div>

            <div className="details-section">
              <h4>Education and Emplyment</h4>
              <div className="section-info">
                <div>
                  <label>Level of Education</label>
                  <p>{userData.education.level}</p>
                </div>
                <div>
                  <label>Employment Status</label>
                  <p>{userData.education.employmentStatus}</p>
                </div>
                <div>
                  <label>sector of employment</label>
                  <p>{userData.education.sector}</p>
                </div>
                <div>
                  <label>Duration of employment</label>
                  <p>{userData.education.duration}</p>
                </div>
                <div>
                  <label>office email</label>
                  <p>{userData.education.officeEmail}</p>
                </div>
                <div>
                  <label>Monthly income</label>
                  <p>{userData.education.monthlyIncome}</p>
                </div>
                <div>
                  <label>loan repayment</label>
                  <p>{userData.education.loanRepayment}</p>
                </div>
              </div>
            </div>

            <div className="details-section">
              <h4>Socials</h4>
              <div className="section-info">
                <div>
                  <label>Twitter</label>
                  <p>{userData.socials.twitter}</p>
                </div>
                <div>
                  <label>Facebook</label>
                  <p>{userData.socials.facebook}</p>
                </div>
                <div>
                  <label>Instagram</label>
                  <p>{userData.socials.instagram}</p>
                </div>
              </div>
            </div>

            <div className="details-section">
              <h4>Guarantor</h4>
              <div className="section-info">
                <div>
                  <label>Full name</label>
                  <p>
                    {userData.guarantor.firstName} {userData.guarantor.lastName}
                  </p>
                </div>
                <div>
                  <label>Phone number</label>
                  <p>{userData.guarantor.phoneNumber}</p>
                </div>
                <div>
                  <label>Email Address</label>
                  <p>{userData.guarantor.address}</p>
                </div>
                <div>
                  <label>Relationship</label>
                  <p>N/A</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default UserDetails;

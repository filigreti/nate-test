<template>
  <div id="ak" class="account-settings">
    <div class="side"></div>
    <div class="account-settings-container">
      <div class="job-container">
        <h1 style="font-size:1.1rem" class="header-one py-3">Claims Details</h1>

        <div class="home-job-container">
          <div class="home-job-summary pb-4">
            <div class="insurance-information">
              <div class="insurance-header pt-3 pb-2">
                <h1 class="header-one purp">Insurance Information</h1>
              </div>
              <div class="insurance-grid">
                <div class="d-flex my-3 justify-content-center align-items-center flex-column">
                  <div class="header-two">Total Premium</div>
                  <div class="header-big mt-1 size">₦600,000</div>
                </div>
                <div
                  class="second d-flex my-3 justify-content-center align-items-center flex-column"
                >
                  <div class="header-two">Claims Due</div>
                  <div class="header-big mt-1 size">₦250,000</div>
                </div>
                <div class="d-flex my-3 justify-content-center align-items-center flex-column">
                  <div class="header-two">Insurance Type</div>
                  <div class="header-big mt-1 size">Motor insurance</div>
                </div>
              </div>
            </div>
            <div class="insurance-information information">
              <div class="insurance-header pt-3 pb-2">
                <h1 class="header-one purp">Vehicle’s Information</h1>
              </div>
              <div class="information-grid">
                <div class="d-flex flex-column">
                  <div class="header-two small">Vehicle’s Manufacturer</div>
                  <div class="header-one">Toyota</div>
                </div>
                <div class="d-flex flex-column">
                  <div class="header-two small">Engine Number</div>
                  <div class="header-one">H22A M03737</div>
                </div>
                <div class="d-flex flex-column">
                  <div class="header-two small">Vehicle’s Model</div>
                  <div class="header-one">Toyota</div>
                </div>
                <div class="d-flex flex-column">
                  <div class="header-two small">License Plate Number</div>
                  <div class="header-one">ABC-123DE</div>
                </div>
                <div class="d-flex flex-column">
                  <div class="header-two small">Chasis Number</div>
                  <div class="header-one">5J6TF2H56AL006516</div>
                </div>
                <div class="d-flex flex-column">
                  <div class="header-two small">Vehicle Year</div>
                  <div class="header-one">2019</div>
                </div>
                <div class="d-flex flex-column">
                  <div class="header-two small">Vehicle’s Color</div>
                  <div class="header-one">Matte Black</div>
                </div>
              </div>
            </div>
            <div class="insurance-information information">
              <div class="insurance-header pt-3 pb-2">
                <h1 class="header-one purp">Uploaded Documents</h1>
              </div>
              <div class="my-3 d-flex align-items-center">
                <img src="@/assets/file.svg" alt />
                <div class="ml-3 header-one">IMG_2018_12_90.png</div>
              </div>
              <div class="my-3 d-flex align-items-center">
                <img src="@/assets/file.svg" alt />
                <div class="ml-3 header-one">IMG_2018_12_90.png</div>
              </div>
              <div class="my-3 d-flex align-items-center">
                <img src="@/assets/file.svg" alt />
                <div class="ml-3 header-one">IMG_2018_12_90.png</div>
              </div>
              <div class="my-3 d-flex align-items-center">
                <img src="@/assets/file.svg" alt />
                <div class="ml-3 header-one">IMG_2018_12_90.png</div>
              </div>
            </div>
          </div>
          <div class="home-job-apply">
            <div class="approve-cont">
              <button class="claim-button">Approve Claim</button>
              <button class="claim-button claim-outline">Decline Claim</button>
            </div>
            <div class="insurance-information information">
              <div class="insurance-header pt-3 pb-2">
                <h1 class="header-one purp">Customer’s Information</h1>
              </div>
              <div class="d-flex my-3 flex-column">
                <div class="header-two small">Customer’s Fullname</div>
                <div class="header-one sizer">Chiamaka Angélique Kidjo</div>
              </div>
              <div class="d-flex my-3 flex-column">
                <div class="header-two small">Telephone Number</div>
                <div class="header-one sizer">0801 0123 345</div>
              </div>
              <div class="d-flex my-3 flex-column">
                <div class="header-two small">Email Address</div>
                <div class="header-one sizer">sample@email.com</div>
              </div>
              <div class="d-flex my-3 flex-column mb-5">
                <div class="header-two small">Address</div>
                <div class="header-one sizer">5A, Jakande Estate, Alagomeji - Yaba, Lagos.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style>
.side {
  width: 10rem;
  background: #43425d;
  position: fixed;
  height: calc(100vh - 2.8rem);
  bottom: 0;
  float: left;
}
.account-settings-container {
  width: calc(100% - 10rem);
  float: right;
}
.job-container {
  padding: 5rem 5rem 2rem 2rem;
}

.home-job-container {
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  gap: 2rem;
  margin: 1rem 0;
}
.home-job-summary {
  box-sizing: border-box;
  display: inline-table;
}

.home-job-apply {
  display: inline-table;
  position: sticky !important;
  top: 6rem;
}
.insurance-information {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  padding: 0 1rem;
}
.insurance-header {
  border-bottom: 0.8px solid #e5e5e5;
}
.insurance-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem 0;
}
.size {
  font-size: 1.3rem;
  font-weight: 700;
}
.sizer {
  font-size: 1rem;
  font-weight: 400;
}
.second {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}
.information {
  margin-top: 2rem;
}
.information-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1.5rem 0;
  grid-row-gap: 1.5rem;
  justify-content: center;
  align-items: center;
}
.claim-button {
  background: #f58634;
  border-radius: 2px;
  height: 3rem;
  color: white;
  font-size: 0.85rem;
  border: none;
}
.claim-outline {
  color: #f58634;
  background: transparent;
  border-radius: 2px;
  height: 3rem;
  font-size: 0.85rem;
  border: 1px solid #f58634;
}
.approve-cont {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>

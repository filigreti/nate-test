<template>
  <main v-if="$store.state.applications.length " class="home-area">
    <h1 class="header-one big">Welcome, Lois!</h1>
    <div class="header-two small">{{ Date.now() | sortDate }}</div>
    <div class="mt-5 card-cont">
      <div
        class="card-area shadow-sm card-one d-flex flex-column justify-content-between align-items-start"
      >
        <img src="@/assets/shield.svg" alt />
        <div class="header-big">
          {{
          $store.state.statistics.totalInsurancesBought < 10
          ? "0" + $store.state.statistics.totalInsurancesBought
          : $store.state.statistics.totalInsurancesBought
          }}
        </div>
        <div class="header-one small">Total Insurance Bought</div>
      </div>
      <div
        class="card-area shadow-sm card-one d-flex flex-column justify-content-between align-items-start"
      >
        <img src="@/assets/shield.svg" alt />
        <div class="header-big">{{ $store.state.statistics.totalInsuranceAmount }}</div>
        <div class="header-one small">Total Amount of Insurance</div>
      </div>
      <div
        class="card-area shadow-sm card-one d-flex flex-column justify-content-between align-items-start"
      >
        <img src="@/assets/doc.svg" alt />
        <div class="header-big">₦{{ $store.state.statistics.totalClaimsAmount }}</div>
        <div class="header-one small">Total Insurance Claims</div>
      </div>
      <div
        class="card-area shadow-sm card-one d-flex flex-column justify-content-between align-items-start"
      >
        <img src="@/assets/clip.svg" alt />
        <div class="header-big">{{ $store.state.statistics.totalInsuranceClaims }}</div>
        <div class="header-one small">Total Amount of Claims</div>
      </div>
    </div>
    <div class="mt-5">
      <div class="main-table">
        <div>
          <div style="color: #4D0032;padding:1rem" class="header-one">Insurance Applications</div>
        </div>
        <table class="table table-striped mb-0">
          <thead>
            <tr class="w-100">
              <th class="scope-head" scope="col">S.N</th>
              <th class="scope-head" scope="col">Insurance Type</th>
              <th class="scope-head" scope="col">Amount</th>
              <th class="scope-head" scope="col">Date</th>
              <th class="scope-head" scope="col">Status</th>
              <th class="scope-head" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(application, index) in this.$store.state.applications" :key="index">
              <th class="scope-td" scope="row">{{ index + 1 }}</th>
              <td class="scope-td pr-5">{{ application.insuranceType }}</td>
              <td class="scope-td pr-5">₦{{ application.amount }}</td>
              <td class="scope-td pr-5">{{ application.createdDate | sortDate }}</td>
              <td class="scope-td">
                <div class="complete d-flex align-items-center" v-if="application.complete">
                  <div class="dot mr-3"></div>Completed
                </div>
                <div class="incomplete d-flex align-items-center" v-else>
                  <div class="red-dot mr-3"></div>Incomplete
                </div>
              </td>
              <td class="scope-td">
                <button @click="send(application)" class="button-claim" v-if="application.complete">
                  Make a Claim
                  <svg
                    width="5"
                    height="8"
                    viewBox="0 0 5 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L4 4L1 1"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button @click="send(application)" class="button-claim" v-else>
                  Complete Process
                  <svg
                    width="5"
                    height="8"
                    viewBox="0 0 5 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L4 4L1 1"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <main v-else class="d-flex justify-content-center align-items-center w-100" style="height:50vh">
    <div class="header-big">Loading</div>
  </main>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {};
  },
  filters: {
    sortDate: function(value) {
      if (!value) return "";
      return moment(value).format("Do MMM YYYY");
    }
  },
  methods: {
    send(x) {
      this.$router.push({
        name: "AccountSettings",
        params: { x }
      });
    }
  }
};
</script>

<style>
.home-area {
  padding: 5.8rem 5rem 2rem;
  box-sizing: border-box;
}
.card-cont {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
}
.card-area {
  border-radius: 4px;
  height: 13rem;
  padding: 1.5rem;
}
.card-one {
  background: #ffffff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}
.card-two {
  background: #ffffff;
  background-repeat: no-repeat;
  background-size: 60px;
  background-position: right;
}
.scope-head {
  color: #737373;
  font-size: 0.85rem;
  font-weight: 300;
  padding: 1.2rem !important;
  border-bottom: none !important;
}
.table .th {
  padding: 1rem 0 !important;
}
.header-table {
  border: 1px solid;
}
.main-table {
  border: 1px solid #e5e5e5;
}
.scope-td {
  padding: 1rem !important;
  border: none !important;
  font-size: 0.85rem;
  color: #240f00;
  font-weight: 400;
  vertical-align: middle !important;
}
.complete {
  padding: 3px 0;
  width: 108px;
  color: #6add0e;
  background: rgba(106, 221, 14, 0.2);
  border-radius: 2px;
  cursor: pointer;
}
.dot {
  height: 8px;
  width: 8px;
  background: #6add0e;
  border-radius: 50%;
  margin-left: 8px;
}
.incomplete {
  padding: 3px 0;
  width: 108px;
  color: #fd5262;
  background: rgba(253, 82, 98, 0.2);
  border-radius: 2px;
  cursor: pointer;
}
.red-dot {
  height: 8px;
  width: 8px;
  background: #fd5262;
  border-radius: 50%;
  margin-left: 8px;
}
.button-claim {
  background: #f58634;
  border-radius: 2px;
  height: 35px;
  width: 160px;
  color: white;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  align-items: center;
}
</style>

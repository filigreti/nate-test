import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjg2NWZmMzFhZWRkMzQxNDU0OTQ2YiIsImlhdCI6MTU2NTk0Nzg1NCwiZXhwIjoxNTY1OTU1MDU0fQ.5ujc_dMloqYdyoQN556PhGwIqa1OfGwt06vD5iKu-lg";

export default new Vuex.Store({
  state: {
    applications: [],
    statistics: "",
    loading: false,
  },
  mutations: {
    setApplications(state, payload) {
      state.applications = payload;
    },
    setStatistics(state, payload) {
      state.statistics = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async fetchApplications({ commit }) {
      try {
        commit("setLoading", true);
        let res = await axios.get(
          "http://test.natterbase.com:5050/api/interview/get-applications",
          { params: {}, headers: { token: token } }
        );
        commit("setLoading", false);
        let { applications } = res.data;
        commit("setApplications", applications);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchStatistics({ commit }) {
      try {
        commit("setLoading", true);
        let res = await axios.get(
          "http://test.natterbase.com:5050/api/interview/get-statistics",
          { params: {}, headers: { token: token } }
        );
        commit("setLoading", false);
        let { statistics } = res.data;
        commit("setStatistics", statistics);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      paths: ["statistics", "applications"],
    }),
  ],
});

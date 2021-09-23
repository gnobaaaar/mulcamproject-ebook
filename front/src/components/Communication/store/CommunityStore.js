import { makeObservable, action, observable, runInAction } from 'mobx';
import CommunityApi from '../api/CommunityApi';

class CommunityStore {
    @observable communities = [];

    @observable community = { communication_id: '', communication_title: '', communication_content: '', communication_img: '', communication_date: '', communication_views: '', communication_category: '', user_pk: ''};

    @observable Message = '';

    communityApi = new CommunityApi();

    constructor() {
      makeObservable(this);
    }

    @action
    setCommunityProp(name, value) {
      this.community = {
        ...this.community,
        [name]: value,
      };
    }

    @action
    async addCommunity() {
      const result = await this.communityApi.communicationCreate(this.community);
      if (result == null) {
        this.message = '추가되지 않았습니다.';
      }
      this.communities = this.communities.concat(this.community);
    }

    @action
    async removeCommunity() {
      await this.communityApi.communicationDelete(this.community.communication_id);
      const result = await this.communityApi.communicationList();
      runInAction(() => {
        this.communities = result;
      });
      runInAction(() => {
        this.community = {};
      });
    }

    @action
    async modifyCommunity() {
      await this.communityApi.communicationUpdate(this.community.communication_id, this.community);
      const result = await this.communityApi.communicationList();
      runInAction(() => {
        this.communities = result;
      });
      runInAction(() => {
        this.community = {};
      });
    }

    @action
    async selectCommunity(id) {
      const result = await this.communityApi.communicationDetail(id);
      runInAction(() => {
        this.community = result;
      });
    }

    @action
    async selectAll() {
      const result = await this.communityApi.communicationList();
      runInAction(()=>{
        this.communities = result;
      });
    }
}
export default new CommunityStore();

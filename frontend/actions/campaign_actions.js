import * as CampaignApiUtil from '../utils/campaign_utils';

export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';
export const GET_ALL_CAMPAIGNS = 'GET_ALL_CAMPAIGNS'

const receiveCurrentCampaign = campaign => ({
    type: CREATE_CAMPAIGN,
    campaign
})

const receiveAllCampaigns = campaigns => ({
    type: GET_ALL_CAMPAIGNS,
    campaigns
})

export const createNewCampaign = campaign => dispatch => (
    CampaignApiUtil.createNewCampaign(campaign).then(campaign => (
        dispatch(receiveCurrentCampaign(campaign))
        )
    )
)

export const getCampaigns = () => dispatch => (
    CampaignApiUtil.getCampaigns().then(campaigns => dispatch(receiveAllCampaigns(campaigns)))
    )
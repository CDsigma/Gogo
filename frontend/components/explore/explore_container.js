import { connect } from 'react-redux';
import { getCampaigns } from '../../actions/campaign_actions';
import Explore from './explore';

const mapStateToProps = (state) => {
    // debugsger;
    return {
        campaigns: Object.values(state.entities.campaigns)
    };
};

const mapDispatchToProps = dispatch => ({
    getCampaigns: () => dispatch(getCampaigns())
    // campaigns: Object.va() => dispatch(getCampaigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);

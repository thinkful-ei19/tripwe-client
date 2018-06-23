import React from 'react';
import Moment from 'react-moment';
import PlansForm from './plans-form';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { SHOW_PLAN_FORM, showPlanForm, closePlanForm } from '../actions/plans';

class Plans extends React.Component {
    render() {
        console.log(this.props.isPlanFormHidden);
        console.log(this.props.plans);
        const plans = this.props.plans.map((obj, index) => {
            return (
                <tr className="plans__table--row" key={index}>
                    <td>
                        <Moment format="MM/DD/YYYY HH:mm:ss">{obj.date}</Moment>
                    </td>
                    <td>
                        {obj.link ? (
                            <a href={obj.link} target="_blank">
                                {obj.description}{' '}
                            </a>
                        ) :
                            (
                                obj.description
                            )}
                    </td>
                </tr>
            );
        });
        return (
            <div>
                {/* <i className="fas fa-plus plans__add"></i> */}
                <table className="plans__table">
                    <thead className="plans__table--head">
                        <tr>
                            <th>Date</th>
                            <th>Plan</th>
                        </tr>
                    </thead>
                    <tbody>{plans}</tbody>
                </table>
                {/* <button className="plans__add">Add plan</button>
      <PlansForm tripId={props.tripId} /> */}
                <button className="group__button" onClick={() => this.props.dispatch(showPlanForm(true))}>
                    Add Plan
                </button>
                {this.props.isPlanFormHidden ? (
                    <ReactModal
                        isOpen={true}
                        className="form-modal"
                        overlayClassName="form-modal__overlay"
                    >
                        <PlansForm newPlan={this.props.plans} tripId={this.props.tripId} />
                    </ReactModal>
                ) : null}
            </div>
        );
    }
}
const mapStatetoProps = state => {
    return {
        isPlanFormHidden: state.plan.isPlanFormHidden
    };
};

export default connect(mapStatetoProps)(Plans);

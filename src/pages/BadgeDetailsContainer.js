import React, {Component} from 'react'


import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import api from '../api';

class BadgeDetailsContainer extends Component{
    
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount (){
        this.fetchData()
    }

    fetchData = async () =>{
        try {
            this.setState({loading: true})
            const id = this.props.match.params.badgeId
            const data = await api.badges.read(id)
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    render(){
        if(this.state.loading) return <PageLoading/>
        if(this.state.error) return <PageError error={this.state.error}/>
        return (
            <BadgeDetails badge={this.state.data}/>
        )
    }
}

export default BadgeDetailsContainer
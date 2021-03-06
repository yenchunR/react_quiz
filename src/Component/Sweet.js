import React from 'react';
import pexels from './pexels';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class Sweet extends React.Component {
    state = { photos: [] };

    onSearchSubmit = async (term) => {
        const response = await pexels.get(`/v1/search`, {
            params: {
                query: term,
                per_page: 15,
                page: 1
            }
        });

        this.setState({ photos: response.data.photos });
    }

    render() {
    return (
    <div className="container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.photos} />
    </div>
    );
    };
}

export default Sweet;
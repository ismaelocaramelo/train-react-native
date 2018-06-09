import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import ContactItem from './ContactItem';

const { any } = PropTypes;

const data = [
  { id: 1, name: 'Betisman' },
  { id: 2, name: 'Josito' },
  { id: 3, name: 'Josep' },
  { id: 4, name: 'Feliun' }
];

class ContactList extends PureComponent {
  state = {
    swiping: false
  };

  onToggleSwipe = () => {
    this.setState(({ swiping }) => {
      swiping: !swiping;
    });
  };

  onRemoveContact = contact => {
    const index = data.findIndex(item => item.id === contact.id);

    // Danger !!!
    data.splice(index, 1);
  };

  renderContact = ({ item }) => (
    <ContactItem
      contact={item}
      onRemove={this.onRemoveContact}
      onDragEnd={this.onToggleSwipe}
      onDragStart={this.onToggleSwipe}
    />
  );

  render() {
    return (
      <FlatList
        data={data}
        style={styles.main}
        renderItem={this.renderContact}
        keyExtractor={item => item.id}
      />
    );
  }
}

import React, { PureComponent } from 'react';
import { Table } from 'semantic-ui-react';

class ListView extends PureComponent {
  //

  render() {
    //
    const { comm, onSelectCom } = this.props;

    return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>일정목록</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {Array.isArray(comm) && comm.length ? (
                      comm.map((com) => {
                        return (
                                <Table.Row
                                    key={com.communication_id}
                                    onClick={() => onSelectCom(com.communication_id)}
                                >
                                    <Table.Cell>{com.communication_title}</Table.Cell>

                                </Table.Row>
                        );
                      })
                    ) : (
                        <Table.Row>
                            <Table.Cell>Empty</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
    );
  }
}

export default ListView;

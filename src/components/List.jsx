import React, { Component } from 'react';
import Table from './table/Table';
import Tbody from './table/Tbody';
import Tr from './table/Tr';
import Th from './table/Th';
import Thead from './table/Thead';
import { getAll } from '../services/heroes.services';
import Td from './table/Td';
import S from './table/S.jsx';
import Button from './table/Button';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getAll,
            ring: true,
            estilo: "kill",
            btnring: "btn btn-primary",
            btnkill: "btn btn-danger"
        }

    }

    handleClick = e => {
        const { data } = this.state;
        const newdata = data.filter(r => r !== e);
        this.setState({ data: newdata, ring: false });
    };

    handleKill = e => {
        const { data } = this.state;
        const datakill = e;
        datakill["kill"] = true;
        console.log(datakill);
        const newdata = data.filter(r => r !== e);
        newdata.push(datakill);
        this.setState({ data: newdata });
    };
    render() {
        const { data, ring, estilo, btnkill, btnring } = this.state;
        return (
            <div>
                <Table >
                    <Thead>
                        <Tr >
                            <Th>Name</Th>
                            <Th>Race</Th>
                            <Th>Age</Th>
                            <Th>Weapon</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((e, i) => (
                            <Tr key={i}>
                                {e.kill ? <Td  > <S > {e.name} </S></Td> : <Td> {e.name} </Td>}
                                <Td> {e.kill ? <S> {e.race} </S> : e.race}</Td>
                                <Td > {e.kill ? <S> {e.age} </S> : e.age}</Td>
                                <Td> {e.kill ? <S> {e.weapon} </S> : e.weapon}</Td>

                                <Td> {ring ? <Button estilo={this.state.btnring} event={() => (this.handleClick(e))}>RING</Button> : ""}</Td>
                                <Td><Button estilo={this.state.btnkill} event={() => (this.handleKill(e))}>KILL</Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        );
    }
}

export default List;
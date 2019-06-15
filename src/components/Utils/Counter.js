import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Button, ButtonGroup, Badge } from 'reactstrap';

const Counter = () => {
    const counter = useStoreState(state => state.counter)
    const increase = useStoreActions(actions => actions.add)
    const decrease = useStoreActions(actions => actions.decrease)

    return (
        <div className="text-center">
            <h4>Ease Peasy Count Example</h4>
            <p>
                Count <Badge color="secondary">{counter}</Badge>
            </p>
            <ButtonGroup>
                <Button color="danger" onClick={decrease}>Decrease</Button>
                <Button color="success" onClick={increase}>Increase</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter

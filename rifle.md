## Rifle tests list (i.e. specification)

- Rifle
    - as a class
        - should has fire() method
        - should has load() method
        - should has getShotNumber() method
        - should exist
    - with limited max magazine capacity, for instance 5
        - goes empty from the factory
        - its load() method
            - should load its max magazine capacity by default
            - should load riffle any particular number of bullets
                - should load 2 bullets from 2 bullets magazine
                - should load 1 bullets from 1 bullets magazine
                - should load -2 bullets from -2 bullets magazine
                - should load -3 bullets from -3 bullets magazine
                - should load 0 bullets from 0 bullets magazine
                - should load 4 bullets from 4 bullets magazine
                - should load -1 bullets from -1 bullets magazine
                - should load 3 bullets from 3 bullets magazine
            - should not load more than max magazine capacity bullets
                - should load 5 from 7 bullets magazine
                - should load 5 from 6 bullets magazine
                - should load 5 from 5 bullets magazine
    - with unlimited max magazine capacity
        - goes empty from the factory
        - its load() method
            - should load 0 bullets by default
            - should load riffle any number of bullets
                - should load 2 bullets from 2 bullets magazine
                - should load -3 bullets from -3 bullets magazine
                - should load 7 bullets from 7 bullets magazine
                - should load 6 bullets from 6 bullets magazine
                - should load 5 bullets from 5 bullets magazine
                - should load -2 bullets from -2 bullets magazine
                - should load 8 bullets from 8 bullets magazine
                - should load -1 bullets from -1 bullets magazine
                - should load 9 bullets from 9 bullets magazine
                - should load 4 bullets from 4 bullets magazine
                - should load 0 bullets from 0 bullets magazine
                - should load 10 bullets from 10 bullets magazine
                - should load 3 bullets from 3 bullets magazine
                - should load 1 bullets from 1 bullets magazine
    - fire() method
        - should decrease the number of available shots
        - should must report if ammo runs out
        - should print console message every time
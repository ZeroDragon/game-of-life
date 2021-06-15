Game of life with a twist
=========================


This game of life has same basic rules of original one  

With three changes:

- If a cell is alive for more than 255 iterations, it will spawn 8 children around
- Every "come back to life" cell has a 50% of possibility to have a value between 1 and 255 of mutation
  - Every iteration there is a 10% of possibility that an event of extinction occurs
  - Every extinction has a value between 1 and 255. All cells with that mutation will die inmediatly



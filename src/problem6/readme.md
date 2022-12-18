# Problem 6: Transaction Broadcaster Service

To achieve this, we can create a microservice that exposes an internal API for receiving transactions. This API would receive a POST request containing the transaction data, which it would then pass on to the signing module. The signing module would be responsible for signing the transaction using a private key and returning a signed transaction.

Next, the signed transaction would be passed to the broadcasting module, which would be responsible for sending the transaction to the blockchain network. The broadcasting module would handle any failed transactions by automatically retrying them according to the specified retry logic. For example, if the RPC request to the blockchain node fails 1% of the time and takes more than 30 seconds to respond, the broadcasting module could retry the transaction up to a certain number of times before ultimately failing it.

Broadcasting module(Producer), publish the transaction status to a kafka topic  middleware. Frontend able to consume and fetch transactions. 

We can able to save transactions to a db using connector. (Mongo, PostgreSQL, MySql)

Admin able to retry the failed transaction using UI.

Diagram is in the folder.(problem6.png)




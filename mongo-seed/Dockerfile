FROM mongo:4.2.12

COPY database/guia_edutec /guia_edutec
CMD  mongorestore --host=mongo --db=guia_edutec -u geos -p <password-default> --authenticationMechanism SCRAM-SHA-256 /guia_edutec --gzip --drop
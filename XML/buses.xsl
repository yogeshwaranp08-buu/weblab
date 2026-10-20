
<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Bus Management System</title>
            </head>

            <body>
                <h2>Bus Management System</h2>

                <table border="1" cellpadding="8">
                    <tr>
                        <th>Bus Name</th>
                        <th>Bus Number</th>
                        <th>Route</th>
                        <th>Bus Fare</th>
                    </tr>

                    <xsl:for-each select="buses/bus">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="number"/></td>
                            <td><xsl:value-of select="route"/></td>
                            <td>₹<xsl:value-of select="fare"/></td>
                        </tr>
                    </xsl:for-each>

                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>

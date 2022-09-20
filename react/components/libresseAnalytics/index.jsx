import React from 'react';
import { Helmet } from 'react-helmet'
import { useRenderSession } from 'vtex.session-client'


export default function libresseAnalytics() {
  const { loading, session, error } = useRenderSession()

  if (!loading) {
    let userEmail = { email: session?.namespaces?.profile?.email?.value }
    if (userEmail == null || userEmail == undefined) {
      return (
        <Helmet>
          <script type="text/javascript">
            window.libresseAnalytics = window.libresseAnalytics || { }
            window.libresseAnalytics = {
              'userInfo':{'uid': null,'tipoNavegacao': null,'dataCadastro':null}   
            }
          </script>
        </Helmet>
      )
    }
    else {
      <Helmet>
        <script type="text/javascript">
          window.libresseAnalytics = window.libresseAnalytics || { }
          window.libresseAnalytics = {
            'userInfo':{
            'uid': null,
          'tipoNavegacao': null,
          'dataCadastro': null  
                    }   
                  }
        </script>
      </Helmet>
    }
  }


}